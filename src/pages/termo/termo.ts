import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-termo',
  templateUrl: 'termo.html',
})
export class TermoPage {

  public showBackButton: boolean = true;

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams,
    private storage: Storage,
    private navCtrl: NavController
  ) {}

  ionViewDidEnter() {
    this.showBackButton = this.navParams.get('showBackButton') !== undefined ? this.navParams.get('showBackButton') : true;
  }

  back() {
    this.viewCtrl.dismiss();
  }

  aceitar() {
    this.storage.set('termo', true).then(() => {
      this.navCtrl.setRoot(TabsPage);
    });
  }
}
