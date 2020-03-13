import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-foto-membro',
  templateUrl: 'foto-membro.html',
})
export class FotoMembroPage {

  foto: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    this.foto = this.navParams.get('foto');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
