import { Component } from '@angular/core';
import { IonicPage, ToastController, ViewController } from 'ionic-angular';
import { Util } from '../../util/util';
import { IonicUtilProvider } from '../../providers/ionic-util';
import { StringUtil } from '../../util/string-util';
import { LoginProvider } from '../../providers/login.provider';

@IonicPage()
@Component({
  selector: 'page-recuperar-senha-cns',
  templateUrl: 'recuperar-senha-cns.html',
})
export class RecuperarSenhaCnsPage {

  campoValido: boolean;
  cns: string;
  nomeMae: string;

  constructor(
    private viewCtrl: ViewController,
    private util: IonicUtilProvider,
    private toastCtrl: ToastController,
    private loginProvider: LoginProvider,
  ) {}

  back() {
    this.viewCtrl.dismiss(false);
  }

  recuperar() {

    if (!this.cns) {
      this.toastCtrl.create({
        message: 'Informe um CPF/CNS válido.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }

    if (!this.nomeMae) {
      this.toastCtrl.create({
        message: 'Informe o nome da mãe.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }

    let campo = this.cns.replace(/\D/g, '');
    this.validarCNS(campo);

    if (!this.campoValido) {
      this.toastCtrl.create({
        message: 'CNS inválido.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }

    this.util.onLoading('Recuperando senha...');
    this.loginProvider.recuperarSenha({
      nomeMae: StringUtil.removeDiacritics(this.nomeMae),
      cns: campo
    }).then(() => {
      this.util.endLoading();
      let toast = this.toastCtrl.create({
        message: 'Senha alterada com sucesso e enviada para seu email.',
        position: 'top',
        duration: 2500
      });
      toast.onDidDismiss(() => {
        this.viewCtrl.dismiss(true);
      });
      toast.present();
    }, (error) => {
      console.log('error', error);
      this.util.endLoading();
      if (error && error.indexOf('SYSTEM_FAULT') !== -1) {
        error = 'Ocorreu um erro no sistema. Verifique seus dados e tente novamente.';
      }
      this.toastCtrl.create({
        message: error,
        position: 'top',
        duration: 2500
      }).present();
    });
  }

  validarCNS(cns: string) {
    if (cns[0] === '1' || cns[0] === '2') {
      this.campoValido = Util.validaCNS(cns);
      return;
    }
    this.campoValido = Util.validaCNS_PROV(cns);
  }

}
