import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import { HTTP } from '@ionic-native/http';
import { fromPromise } from 'rxjs/Observable/fromPromise';

export class TweetMedia {
  constructor(public type: string,
              public url: string) {
  }
}

export class Tweet {

  constructor(public text: string,
              public media: TweetMedia[],
              public date: string) {
  }
}

@Injectable()
export class TwitterProvider {
  private static secret = btoa('cUMele8GTsTpunOIYSA2ckthg:kcG7RuVgYFLpeJCk2DG2rwPrreOY7dWkCsmqzk2zIHGHqU10RF');
  private static bearer = '';

  private nextQuery: string = '';
  private finished: boolean = false;

  constructor(private http: HTTP) {
  }

  authenticate(): Observable<void> {

    this.http.setHeader('https://api.twitter.com/','Authorization', 'Basic ' + TwitterProvider.secret);
    this.http.setHeader('https://api.twitter.com/', 'Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    this.http.setHeader('https://api.twitter.com/', 'Access-Control-Allow-Origin', 'http://localhost:8080');
    this.http.setHeader('https://api.twitter.com/', 'Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    this.http.setHeader('https://api.twitter.com/', 'Access-Control-Allow-Headers' ,'X-Requested-With, Content-Type, Authorization, Origin, Accept');
    this.http.setDataSerializer('urlencoded');

    let retorno = fromPromise(this.http.post('https://api.twitter.com/oauth2/token?grant_type=client_credentials', {}, this.http.getHeaders('https://api.twitter.com/')));

    return retorno.map((res: any) => {
      TwitterProvider.bearer = JSON.parse(res.data).access_token;
    })
  }

  update(): Observable<Tweet[]> {
    this.finished = false;
    console.log('inicio do update twitter');
    return this.authenticate().flatMap(() => {
      console.log('depois de autenticar no twitter');
      return this.load()
    });
  }

  next(): Observable<Tweet[]> {
    if (this.finished) return Observable.create((observer: Observer<Tweet[]>) => {
      observer.next([]);
      observer.complete()
    });

    return this.authenticate().flatMap(() => {
      return this.load(this.nextQuery)
    });
  }

  private load(next: string = ''): Observable<Tweet[]> {
    return Observable.create((observer: Observer<Tweet[]>) => {
      this.http.setHeader('https://api.twitter.com','Authorization', 'Bearer ' + TwitterProvider.bearer);

      let tweets = [];

      let request = () => {
        this.http.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?${next}&screen_name=minsaude&count=10&tweet_mode=extended&exclude_replies=true&include_rts=1&`, null, this.http.getHeaders('https://api.twitter.com')).then((res: any) => {
          let response = JSON.parse(res.data);
          console.log('response load twitter', response);
          this.finished = !response.length;
          if (this.finished) {
            observer.next(tweets);
            observer.complete();
            return;
          }
          this.nextQuery = `max_id=${response[response.length - 1].id}`;
          for (let status of response) {
            if (status.retweeted_status || status.in_reply_to_user_id || status.in_reply_to_status_id) {
              continue;
            }

            let medias = [];
            if (status.entities.media) {
              for (let media of status.entities.media) {
                medias.push(new TweetMedia(media.type, media.media_url))
              }
            }
            let date = new Date(status.created_at);
            let tweet = new Tweet(status.full_text, medias, `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
            tweets.push(tweet);
          }
          if (response.length != 0 && tweets.length <= 10) {
            next = this.nextQuery;
            request();
          } else {
            observer.next(tweets);
            observer.complete();
          }
        });
      };
      let hideFooterTimeout = setTimeout(() => {
        request();
      }, 200);
    })

  }
}
