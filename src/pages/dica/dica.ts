import { DicaProvider } from './../../providers/dica.provider';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DicaDetalhePage } from "../dica-detalhe/dica-detalhe";
import { IonicUtilProvider } from "../../providers/ionic-util";

@Component({
  selector: 'page-dica',
  templateUrl: 'dica.html'
})

export class DicaPage {

  dicasList: any = [];
  loading: boolean = false;
  isIphoneX: boolean = false;

  constructor(public navCtrl: NavController,
              private util: IonicUtilProvider,
              private dicaProvider: DicaProvider) {
  }

  ionViewDidLoad() {
    this.util.onLoading('Carregando dicas...');
    this.buscaDicas().then(() => {
      console.log('dicas', this.dicasList);
    });
  }

  buscaDicas(): Promise<any> {
    return this.dicaProvider.getDicas().then((dicas: any) => {
      this.dicasList = dicas;
      this.util.endLoading();
    });
  }

  getClassColor(dica) {
    return 'lb-color-' + dica.titulo;
  }

  abrirDetalheDica(dica) {
    this.navCtrl.push(DicaDetalhePage, { dica: dica });
  }
}
