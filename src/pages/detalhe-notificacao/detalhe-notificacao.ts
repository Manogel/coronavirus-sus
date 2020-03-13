import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-detalhe-notificacao',
  templateUrl: 'detalhe-notificacao.html',
})
export class DetalheNotificacaoPage {

  notificacao: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
    this.notificacao = this.navParams.get('notificacao');
    console.log('this.notificacao', this.notificacao);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheNotificacaoPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  getDataUltimoRegistro(registro): String {
    if (registro.createdAt){
      let mo = moment(registro.createdAt).locale('pt-br');
      return mo.format('LLL');
    }
  }


}
