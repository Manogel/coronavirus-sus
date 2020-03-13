import { Component } from '@angular/core';
import { AlertController, App, IonicPage, ModalController, Platform, ToastController } from 'ionic-angular';
import { PrimeiroAcessoPage } from '../primeiro-acesso/primeiro-acesso';
import { RecuperarSenhaPage } from '../recuperar-senha/recuperar-senha';
import { AlertDiarioSaudePage } from '../alert-diario-saude/alert-diario-saude';
import { Storage } from '@ionic/storage';
import { LoginProvider } from '../../providers/login.provider';
import { IonicUtilProvider } from '../../providers/ionic-util';
import { Usuario } from '../../providers/usuario';
import { TermoPage } from '../termo/termo';
import { LoginCnsPage } from '../login-cns/login-cns';
import { DetalhePerfilPage } from '../detalhe-perfil/detalhe-perfil';
import { HistoricoNotificacoesPage } from '../historico-notificacoes/historico-notificacoes';
import { AppVersion } from '@ionic-native/app-version';

declare var process: {env: {[key: string]: string | undefined}};
declare let cordova;

const URL_BC_TOKEN = process.env['URL_BC_TOKEN'];
const CLIENT_ID_BC = process.env['CLIENT_ID_BC'];

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})

export class PerfilPage {

  public codeBC: any;
  public usuario: Usuario;
  public profissional: boolean = false;
  public checkProfissional: boolean = false;
  public version: string;
  public loading: boolean;

  constructor(
    private modalCtrl: ModalController,
    private storage: Storage,
    private loginProvider: LoginProvider,
    private toastCtrl: ToastController,
    private util: IonicUtilProvider,
    private alertCtrl: AlertController,
    private platform: Platform,
    private app: App,
    private appVersion: AppVersion
  ) {}

  ionViewDidEnter() {
    this.util.onLoading('Carregando...');
    this.loading = true;
    if(!this.platform.is('cordova')) {
      this.version = '0.0.2';
    } else {
      this.appVersion.getVersionNumber().then((version) => {
        this.version = version;
      });
    }
    // this.storage.get('show-alert-bc').then((data) => {
    //   if(data) {
    //     let modal = this.modalCtrl.create('AlertDiarioSaudePage', null, {cssClass: 'alert-diario'});
    //     modal.present();
    //     modal.onDidDismiss(() => {
    //       this.storage.set('show-alert-bc', false);
    //     });
    //   }
    // });
    this.usuario = new Usuario();
    this.storage.get('usuario').then((usuario) => {
      if(usuario) {
        console.log('usuario no view did enter', usuario);
        this.usuario = usuario;
        this.storage.get('profissional-saude').then((p) => {
          if(p === true) {
            this.checkProfissional = p;
          } else {
            this.storage.get('usuario-profissional-saude').then((check) => {
              this.checkProfissional = check;
            });
          }
        })
      }
      setTimeout(() => {
        this.util.endLoading();
        this.loading = false;
      }, 500);
    });
  }

  openPage(page) {
    let pagina = page === 'PrimeiroAcessoPage' ? PrimeiroAcessoPage :
      page === 'RecuperarSenhaPage' ? RecuperarSenhaPage :
      page === 'TermoPage' ? TermoPage : page === 'LoginCnsPage' ? LoginCnsPage :
      page === 'DetalhePerfilPage' ? DetalhePerfilPage :
      page === 'HistoricoNotificacoesPage' ? HistoricoNotificacoesPage : null;

    if(pagina) {
      let modal = null;
      if(page == 'DetalhePerfilPage') {
        modal = this.modalCtrl.create(pagina, {usuario: this.usuario});
        modal.present();
      } else {
        modal = this.modalCtrl.create(pagina);
        modal.present();
      }
      modal.onDidDismiss(() => {
        this.util.onLoading('Carregando...');
        this.loading = true;
        this.usuario = new Usuario();
        this.storage.get('usuario').then((usuario) => {
          this.usuario = usuario;
          setTimeout(() => {
            this.util.endLoading();
            this.loading = false;
          }, 500);
        });
      });
    }
  }

  changeTab(){
    this.app.getRootNav().getActiveChildNav().select(2);
  }

  login() {
    this.util.onLoading('Autenticando...');
    this.brasilCidadaoLogin();
  }

  brasilCidadaoLogin() {
    let url = encodeURI(URL_BC_TOKEN + 'scp/authorize?response_type=code&client_id=' + CLIENT_ID_BC +
      '&scope=openid+brasil_cidadao&redirect_uri=https://diariosaude.saude/login&nonce=db46563158a&state=db46563158a');
    console.log('url inAppBrowser', url);
    let browserRef = cordova.InAppBrowser.open(url, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
    browserRef.addEventListener('loadstart', (event) => {
      this.codeBC = null;
      if ((event.url).indexOf("https://diariosaude.saude/login") === 0 || (event.url).indexOf("http://diariosaude.saude/login") === 0) {
        browserRef.close();
        let responseParameters = ((event.url).split("?")[1]).split("&");
        let parsedResponse = {};
        for (let i = 0; i < responseParameters.length; i++) {
          parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
        }

        this.codeBC = parsedResponse["code"];
        if (this.codeBC !== undefined && this.codeBC !== null) {
          this.loginProvider.recuperarTokenBC(parsedResponse['code']).then((t: any) => {
            this.loginProvider.getUserInfo(t.access_token).then((user) => {
              this.storage.set('token_bc',t.access_token);
              this.verificaProfissionalSaude(user);
            }).catch((error) => {
              this.handleError(error);
            })
          }).catch((error) => {
            this.handleError(error);
          })
        }
      }
    });
    browserRef.addEventListener('exit', () => {
      if(!this.codeBC) {
        this.util.endLoading();
      }
    })
  }

  openAlertDiarioSaude() {
    let modal = this.modalCtrl.create('AlertDiarioSaudePage', null, {cssClass: 'alert-diario'});
    modal.present();
    modal.onDidDismiss((data) => {
      if(data) {
        this.login();
      }
    })
  }

  logout() {
    this.alertCtrl.create({
      title: '',
      message: 'Tem certeza que deseja sair?',
      buttons: [{
        text: 'Não'
      }, {
        text: 'Sim',
        handler: () => {
          this.util.onLoading('Saindo...');
          this.loading = true;
          this.loginProvider.logout().then(() => {
            this.usuario = new Usuario();
            this.storage.remove('usuario-profissional-saude');
            this.storage.remove('usuario').then(() => {
              setTimeout(() => {
                this.util.endLoading();
                this.loading = false;
              },500)
            })
          })
        }
      }]
    }).present();
  }

  changeProfissional() {
    this.util.onLoading('Registrando...');
    this.storage.set('usuario-profissional-saude', this.checkProfissional).then(() => {
      this.util.endLoading();
    })
  }

  public formatarCns(value: string) {
    if (!value) {
      return value;
    }
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{4})(\d)/, '$1.$2');
    value = value.replace(/(\d{4})(\d)/, '$1.$2');
    value = value.replace(/(\d{4})(\d)/, '$1.$2');
    return value;
  }

  async verificaProfissionalSaude(user) {
    await this.loginProvider.profissionalSaude(user.cpf).subscribe(( response) => {
      this.usuario = new Usuario();
      let profissionalSaude = response !== null;
      this.storage.set('profissional-saude', profissionalSaude).then(() => {
        let usuario = this.retirarAtributos(user);
        this.storage.set('usuario', usuario).then(() => {
          this.usuario.set(usuario);
          this.util.endLoading();
        });
      });
    });
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

  private handleError(error) {
    let toast = this.toastCtrl.create({
      message: error,
      duration: 3500,
      position: 'top'
    });
    this.util.endLoading();
    toast.present();
  }
}
