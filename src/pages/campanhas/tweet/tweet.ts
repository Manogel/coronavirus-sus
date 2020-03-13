import { Component, Input } from '@angular/core'
import { Tweet } from "../../../providers/twitter";
import { SocialSharing } from '@ionic-native/social-sharing';
import { LoadingController, Platform } from "ionic-angular";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'campanhas--tweet',
  templateUrl: 'tweet.html'
})

export class CampanhasTweet {
  @Input() tweet: Tweet;

  shareClicked() {
    let loading = this.loadingCtrl.create();
    loading.present();

    let url = '';
    if (this.tweet.media[0])
      url = this.tweet.media[0].url;

    if (url === './assets/images/logo-ms.png')
      url = null;

    let texto = this.tweet.text;

    this.socialSharing.share(texto, 'Guardiões', url).then(() => {
      loading.dismiss();
    }).catch(() => {
      loading.dismiss();
    });
  }

  constructor(private sanitizer: DomSanitizer,
              private socialSharing: SocialSharing,
              private loadingCtrl: LoadingController) {
  }

  reLinkify(texto: any) {
    let t = texto.linkify();
    let matches = t.match(/href="([^"]*")/g) || [];
    for (let match of matches) {
      let url = match.split('=')[1];
      t = t.replace(match, `onclick="cordova.InAppBrowser.open(${url.replace(/"/g, '\'')}, '_blank')"`)
    }
    return this.sanitizer.bypassSecurityTrustHtml(t);
  }
}
