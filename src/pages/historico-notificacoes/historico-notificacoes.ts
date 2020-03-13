import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RegistrosProvider } from '../../providers/registros';
import { IonicUtilProvider } from '../../providers/ionic-util';
import { DetalheNotificacaoPage } from '../detalhe-notificacao/detalhe-notificacao';
import * as Parse from 'parse';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-historico-notificacoes',
  templateUrl: 'historico-notificacoes.html',
})
export class HistoricoNotificacoesPage {
  cpf:any;
  notificacoes = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private util: IonicUtilProvider,
    private registros: RegistrosProvider
  ) {
  }

  ionViewDidLoad() {
    this.getNotificacoes();
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  async getNotificacoes(){
    this.util.onLoading('Recuperando histórico...');
    await this.registros.getCPF().then(r => {
      if (r != 'err') this.cpf = r.replace(/[^\d]+/g,'');
    });
    let query = new Parse.Query("notificacoesAgente");
      query.descending("createdAt");
      query.equalTo("cpfUsuarioLogado", this.cpf);
      query.limit(1000);
      await query.find({
          success: (results) => {
            this.notificacoes = JSON.parse(JSON.stringify(results));
            this.util.endLoading();
          },
          error: (error) => {
            console.log('error', error);
          }
      });
  }

  getDataUltimoRegistro(registro): String {
    if (registro.createdAt){
      let mo = moment(registro.createdAt).locale('pt-br');
      return mo.format('LLL');
    }
  }

  openNotificacao(notificacao){
    this.navCtrl.push(DetalheNotificacaoPage, { notificacao: notificacao });
  }

}
