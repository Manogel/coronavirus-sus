import { Component } from '@angular/core';
import {
  AlertController,
  IonicPage,
  LoadingController,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import { LoginProvider } from '../../providers/login.provider';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { ConfirmarEmailPage } from '../confirmar-email/confirmar-email';

@IonicPage()
@Component({
  selector: 'page-perguntas',
  templateUrl: 'perguntas.html',
})
export class PerguntasPage {

  public usuario: any;
  public perguntas: any;
  public perguntaAtual = 0;
  index: any = 0;
  pergunta: any = {};

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private loginProvider: LoginProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private storage: Storage,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Recuperando pergunta'
    });

    loading.present();

    this.usuario = this.navParams.get('usuario');
    this.loginProvider.recuperarPergunta(this.usuario.documento).then((perguntas) => {
      this.perguntas = perguntas;
      this.perguntas[0].erros = 0;
      this.perguntas[1].erros = 0;
      this.perguntas[2].erros = 0;
      loading.dismiss();
    }).catch(e => {
      loading.dismiss();
      this.toastCtrl.create({
        message: e,
        position: 'top',
        duration: 4000
      }).present();
      this.navCtrl.pop();
    });
  }

  onChange(pergunta, index) {
    if (pergunta.value) {
      this.pergunta = pergunta;
      this.index = index;
    }
  }

  confirmar(pergunta, index) {
    if (!pergunta.value) {
      this.toastCtrl.create({
        message: 'Informe sua resposta.',
        position: 'top',
        duration: 4000
      }).present();
      return;
    }

    let resp=pergunta.value;
    if (pergunta.tipo=="DATE"){
      resp=moment(pergunta.value).format("DD/MM/YYYY");
    }
    else{
      resp=(pergunta.tipo == 'NUMBER' ? parseFloat(pergunta.value) :  pergunta.value)
    }
    let resposta={
      "idPergunta": pergunta.id.toString(),
      "resposta": resp,
      "documento": this.usuario.documento
    };

    let loading = this.loadingCtrl.create({
      content: 'Verificando resposta'
    });
    loading.present();

    this.loginProvider.confirmarPergunta(resposta).then(p => {
      this.perguntaAtual++;
      this.pergunta = {};
      loading.dismiss();

      if (this.perguntaAtual == 3) {
        this.navCtrl.push(ConfirmarEmailPage, {
          usuario: this.usuario
        }).then();
      }
    }).catch(e => {
      loading.dismiss();
      this.perguntas[index].erros++;

      if (3 - this.perguntas[index].erros > 0) {
        this.toastCtrl.create({
          message: e.erro + ` - Você tem mais ${3 - this.perguntas[index].erros} tentativas`,
          position: 'top',
          duration: 4000
        }).present();
      }
      else {
        let dh = moment().utcOffset(0, true);
        this.storage.set(`acesso-bloqueado-${this.usuario.cns}`, { bloqueado: true, hora: dh }).then(b => {
          this.toastCtrl.create({
            message: 'Seu acesso foi bloquedo pelas próximas 24hrs.',
            position: 'top',
            duration: 4000
          }).present();
        });
      }
    });
  }

  voltar() {
    this.alertCtrl.create({
      title: '',
      message: 'Todo processo será perdido, Deseja mesmo cancelar?',
      buttons: [{
        text: 'Não'
      }, {
        text: 'Sim',
        handler: () => {
          let loading = this.loadingCtrl.create({
            content: 'Saindo...'
          });

          loading.present();
          this.navCtrl.setRoot(TabsPage).then(() => {
            loading.dismiss();
          });
        }
      }]
    }).present();
  }

}
