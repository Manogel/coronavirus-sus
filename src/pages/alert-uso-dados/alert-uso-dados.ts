import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alert-uso-dados',
  templateUrl: 'alert-uso-dados.html',
})
export class AlertUsoDadosPage {

  constructor(
    private viewCtrl: ViewController
  ) {}

  close(permitir: boolean) {
    this.viewCtrl.dismiss(permitir)
  }

}
