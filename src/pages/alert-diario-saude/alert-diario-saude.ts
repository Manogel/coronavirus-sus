import { Component } from '@angular/core';
import { IonicPage, ModalController, ViewController } from 'ionic-angular';
import { PrimeiroAcessoPage } from '../primeiro-acesso/primeiro-acesso';

@IonicPage()
@Component({
  selector: 'page-alert-diario-saude',
  templateUrl: 'alert-diario-saude.html',
})
export class AlertDiarioSaudePage {

  constructor(
    private viewCtrl: ViewController,
    private modalCtrl: ModalController) {
  }

  close(openLoginBC: boolean = false) {
    this.viewCtrl.dismiss(openLoginBC);
  }

  openPrimeiroAcesso() {
    let modal = this.modalCtrl.create(PrimeiroAcessoPage);
    modal.present();
    this.close();
  }
}
