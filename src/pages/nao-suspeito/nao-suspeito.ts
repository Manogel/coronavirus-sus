import { RegistrosProvider } from '../../providers/registros';
import { Component } from '@angular/core';
import { NavParams, ModalController, NavController, ViewController, Events, Content } from 'ionic-angular';
import { ModalPage } from "../modal/modal";

@Component({
  selector: 'page-nao-suspeito',
  templateUrl: 'nao-suspeito.html'
})

export class NaoSuspeitoPage {

  constructor(
    private viewCtrl: ViewController,
  ) {
    
  }
  
  dismiss() {
    this.viewCtrl.dismiss(null,null,{'animation':'false', 'duration':0});
  }
}
