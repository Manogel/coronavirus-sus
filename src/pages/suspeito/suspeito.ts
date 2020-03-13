import { RegistrosProvider } from '../../providers/registros';
import { Component } from '@angular/core';
import { NavParams, ModalController, NavController, ViewController, Events, Content } from 'ionic-angular';
import { ModalPage } from "../modal/modal";

@Component({
  selector: 'page-suspeito',
  templateUrl: 'suspeito.html'
})

export class SuspeitoPage {

  constructor(
    private viewCtrl: ViewController,
  ) {
    
  }
  
  dismiss() {
    this.viewCtrl.dismiss(null,null,{'animation':'false', 'duration':0});
  }
}
