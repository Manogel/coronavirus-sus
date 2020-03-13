import { Component, ViewChild } from '@angular/core'
import { Tweet, TwitterProvider } from "../../providers/twitter";
import { Content } from "ionic-angular";

@Component({
  selector: 'campanhas',
  templateUrl: 'campanhas.html',
  providers: [TwitterProvider]
})

export class CampanhasPage {

  @ViewChild(Content) content: Content;
  private tweets: Tweet[] = [];
  private empty:boolean = false ;
  public loading: boolean = false;

  constructor(private twitter: TwitterProvider) {}

  ionSelected() {
    this.content.scrollToTop();
  }

  loadMore(ev) {
    this.loading = false;
    this.twitter.next().subscribe((tweets) => {
      this.tweets = this.tweets.concat(tweets);
      this.loading = false;
      ev.complete();
    });
  }

  ionViewDidEnter() {
    this.loading = true;
    this.twitter.update().subscribe((tweets) => {
      this.loading = false;
      this.tweets = tweets;
      this.empty =  (this.tweets.length == 0);
    });
    this.empty =  (this.tweets.length == 0);
  }
}
