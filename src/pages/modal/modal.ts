import { Component } from '@angular/core';
import { Events, NavController, NavParams, ViewController } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { DiagnosticoProvider } from '../../providers/diagnostico.provider';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})

export class ModalPage {

  confirmacao_text: any = {
    titulo: '',
    texto: 'Segundo suas respostas, é provável que você não esteja infectado pelo coronavírus 2019 (SARS-CoV2). Mantenha as condutas de precaução e prevenção, praticando a etiqueta respiratória. Você pode ligar para o Disque Saúde 136 do Ministério da Saúde e receber informações adicionais.',
  };

  

  params: any;
  showModalInfo: boolean = false;
  isIphoneX: boolean = false;
  comoEstou:string;
  sint = [];
  notificacoesSucesso = false;
  
  bem: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private device: Device,
    private events: Events,
    private diagnostico: DiagnosticoProvider) {

    this.params = this.navParams.get('params');
    this.showModalInfo = this.navParams.get('showModalInfo');
    this.comoEstou = this.navParams.get('comoEstou');
    this.sint = this.navParams.get('sintomas') || [];
    this.notificacoesSucesso = this.navParams.get('notificacoesSucesso') || false;

    if (this.comoEstou === 'bem') {
      // this.confirmacao_text.texto = 'Continue informando diariamente como está sua saúde.';
      this.bem = true;
    }
      // if (this.notificacoesSucesso) {
      //   this.confirmacao_text = {
      //     titulo: 'Comunicado realizado!',
      //     texto: 'Agradecemos a colaboração com nossos serviços de saúde.',
      //   };
      // }

      // if (this.sint.length > 0){
      //   this.diagnostico.diagnostico(this.sint).then((result) => {
      //     if (result != ''){
      //       this.confirmacao_text = {
      //         titulo: 'Atenção!',
      //         texto: result,
      //       };
      //     } else this.sint = [];
      //   });
      // }

      this.comoEstou = this.navParams.get("comoEstou");
    if (this.device.model === 'iPhone10,3' || this.device.model === 'iPhone10,6' || this.device.model === 'x86_64') {
      this.isIphoneX = true;
    }
  }

  // removeSint(){
  //   this.sint = [];
  //   this.confirmacao_text = {
  //     titulo: 'Obrigado pela sua colaboração!',
  //     texto: 'Não deixe de procurar o serviço de saúde mais próximo. Continue informando diariamente como está sua saúde.',
  //   };
  // }

  dismiss() {
    this.viewCtrl.dismiss();
    // if (this.comoEstou == 'bem') {
    //   this.viewCtrl.dismiss(tipo);
    // } else {
    //   this.viewCtrl.dismiss(tipo).then(() => this.events.publish('modal-close', true));
    // }
  }
}
