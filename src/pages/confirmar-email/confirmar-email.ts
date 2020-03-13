import { Component } from '@angular/core';
import {
  AlertController,
  IonicPage,
  LoadingController,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginProvider } from '../../providers/login.provider';

@IonicPage()
@Component({
  selector: 'page-confirmar-email',
  templateUrl: 'confirmar-email.html',
})
export class ConfirmarEmailPage {

  public usuario: any;
  public email: string;
  public confirmeemail: string;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private loginProvider: LoginProvider) {
  }

  ionViewDidLoad() {
    this.usuario = this.navParams.get('usuario');
    this.email =(this.usuario.emailPrincipal  ? this.usuario.emailPrincipal:'');

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

  confirmar() {
    this.email =(this.usuario.emailPrincipal  ? this.usuario.emailPrincipal:this.email);
    this.confirmeemail = (this.usuario.emailPrincipal  ? this.usuario.emailPrincipal:this.confirmeemail);
    if (!this.email) {
      this.toastCtrl.create({
        message: 'E-mail é obrigatório.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }

    if (!this.confirmeemail) {
      this.toastCtrl.create({
        message: 'Confirmar E-mail é obrigatório.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }

    if (this.confirmeemail != this.email) {
      this.toastCtrl.create({
        message: 'E-mail diferente do informado.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }


    let loading = this.loadingCtrl.create({
      content: 'Confirmar email'
    });

    loading.present();
    let emailparaenviar =  (this.usuario.emailPrincipal ? this.usuario.emailPrincipal : this.email);

    this.loginProvider.confirmarEmail(emailparaenviar,this.usuario).then(() => {
      // this.navCtrl.push(ConfirmarPinPage, {
      //   usuario: this.usuario,
      //   email: this.email
      // }).then(
      //   () => loading.dismiss()
      // );
    }).catch(e => {
      loading.dismiss();
      this.toastCtrl.create({
        message: e,
        position: 'top',
        duration: 4000
      }).present();
    });
  }

}
