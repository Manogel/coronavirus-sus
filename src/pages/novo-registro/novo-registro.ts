import { IonicUtilProvider } from './../../providers/ionic-util';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController } from 'ionic-angular';
import { SintomasPage } from '../sintomas/sintomas';
import { SaudeProvider } from '../../providers/saude.provider';
import { Device } from '@ionic-native/device';
import { AdicionaMedicamentoPage } from '../adiciona-medicamento/adiciona-medicamento';

@IonicPage()
@Component({
  selector: 'page-novo-registro',
  templateUrl: 'novo-registro.html',
})
export class NovoRegistroPage {

  registros = ['SINTOMAS', 'TEMPERATURA', 'MEDICAMENTOS', 'DURAÇÃO'];

  showButton = false;
  showTemperatura = false;
  showDuracao = false;
  temperatura:string;
  duracao: any;
  membro: any;
  isIphoneX = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private saudeProvider: SaudeProvider,
    private device: Device,
    public modalCtrl: ModalController,
    private util: IonicUtilProvider
  ) {
    if (this.device.model === 'iPhone10,3' || this.device.model === 'iPhone10,6' || this.device.model === 'x86_64') {
      this.isIphoneX = true;
    }
      this.membro = this.navParams.get('membro');
  }

  dismiss(){
    this.viewCtrl.dismiss(null,null,{'animation':'false', 'duration':0});
  }

  open(item){
    this.showButton = item != 'SINTOMAS' && item != 'MEDICAMENTOS';
    switch (item){
      case 'SINTOMAS':{
        this.navCtrl.push(SintomasPage, {membro: this.membro});
        break
      }
      case 'TEMPERATURA':{
        this.showTemperatura = true;
        break
      }
      case 'MEDICAMENTOS':{
        this.navCtrl.push(AdicionaMedicamentoPage, {membro: this.membro});
        break
      }
      case 'DURAÇÃO':{
        this.showDuracao = true;
        break
      }
    }
  }

  confirmar(){
    this.showButton = false;
    this.showTemperatura = false;
    this.showDuracao = false;

    if (this.temperatura.length > 2){
      this.temperatura = this.temperatura.replace('.', '');
      this.temperatura = this.temperatura.slice(0, 3);
      this.temperatura = [this.temperatura.slice(0, 2), '.', this.temperatura.slice(2)].join('');
    }

    this.util.onLoading('Enviando registro...');
    this.saudeProvider.createRegistro({membros:this.membro, temperatura: this.temperatura, duracao: this.duracao }).then(r => {
      delete this.temperatura;
      delete this.duracao;
      this.util.endLoading();
      this.toastCtrl.create({
        message: `Registro salvo com sucesso!`,
        position: 'top',
        duration: 1500
      }).present();
    });

  }

}
