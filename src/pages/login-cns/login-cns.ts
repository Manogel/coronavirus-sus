import { Component } from '@angular/core';
import { IonicPage, ModalController, ToastController, ViewController } from 'ionic-angular';
import { IonicUtilProvider } from '../../providers/ionic-util';
import { Util } from '../../util/util';
import { LoginProvider } from '../../providers/login.provider';
import { Storage } from '@ionic/storage';
import { Usuario } from '../../providers/usuario';
import { RecuperarSenhaCnsPage } from '../recuperar-senha-cns/recuperar-senha-cns';

@IonicPage()
@Component({
  selector: 'page-login-cns',
  templateUrl: 'login-cns.html',
})
export class LoginCnsPage {

  public cns: string;
  public senha: string;
  private campoValido: boolean;
  public usuario: Usuario;

  constructor(
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private util: IonicUtilProvider,
    private loginProvider: LoginProvider,
    private storage: Storage,
    private modalCtrl: ModalController
  ) {}


  back() {
    this.viewCtrl.dismiss();
  }

  login() {
    if (!this.cns) {
      this.toastCtrl.create({
        message: 'É obrigatório informar um CNS.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }

    if (!this.senha || this.senha.length < 6) {
      this.toastCtrl.create({
        message: 'Senha deve conter mais que 6 caracteres.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }
    if (this.senha.length > 16) {
      this.toastCtrl.create({
        message: 'Senha não deve ultrapassar 16 caracteres.',
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

    this.util.onLoading('Autenticando...');

    this.loginProvider.login(campo, this.senha).then((usuario) => {
      this.usuario = new Usuario();
      this.loginProvider.profissionalSaude(campo).subscribe(( response) => {
        let profissionalSaude = response !== null;
        this.storage.set('profissional-saude', profissionalSaude).then(() => {
          this.retirarAtributos(usuario[0]);
          this.storage.set('usuario', usuario[0]).then(() => {
            this.usuario.set(usuario[0]);
            this.util.endLoading();
            this.viewCtrl.dismiss();
          });
        });
      });
    }, (error) => {
      this.util.endLoading();
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

  openRecuperarSenha() {
    let modal = this.modalCtrl.create(RecuperarSenhaCnsPage);
    modal.present();
    modal.onDidDismiss((senhaRecuperada: boolean) => {
      if(senhaRecuperada) {
        this.back();
      }
    })
  }

  retirarAtributos(usuario: any) {
    delete usuario['acessoPortal'];
    delete usuario['cadastroMobile'];
    delete usuario['certidao'];
    delete usuario['cns'];
    delete usuario['cnsLogin'];
    delete usuario['emailAlternativoValidado'];
    delete usuario['emailCodigo'];
    delete usuario['emailPrincipalCodigo'];
    delete usuario['emailPrincipalValidado'];
    delete usuario['encontradoReceita'];
    delete usuario['enderecoBairroCodigo'];
    delete usuario['enderecoCodigo'];
    delete usuario['enderecoComplemento'];
    delete usuario['enderecoMunicipioCodigo'];
    delete usuario['enderecoNumero'];
    delete usuario['enderecoTipoLogradouro'];
    delete usuario['enderecoTipoLogradouroCodigo'];
    delete usuario['grauQualidade'];
    delete usuario['listaCns'];
    delete usuario['municipioNascimentoCodigo'];
    delete usuario['telefone'];
    delete usuario['stHomologado'];
    delete usuario['sexo'];
    delete usuario['racaCor'];
    delete usuario['paisResidenciaCodigo'];
    delete usuario['paisNascimentoCodigo'];
    delete usuario['paisNascimento'];
    delete usuario['nomeSocial'];
    delete usuario['nomade'];
    delete usuario['municipioNascimentoSemUF'];
    delete usuario['municipioNascimento'];
    delete usuario['etniaIndigena'];
    delete usuario['enderecoMunicipioSemUF'];

    return usuario;
  }
}
