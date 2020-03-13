import { IonicUtilProvider } from '../../providers/ionic-util';
import { Component } from '@angular/core';
import {
  ActionSheetController,
  IonicPage,
  NavController,
  NavParams,
  Platform,
  ToastController,
  ViewController
} from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import * as Parse from 'parse';
import { Globals } from '../../providers/globals';
import { RegistrosProvider } from '../../providers/registros';
import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-adicionar-membro',
  templateUrl: 'adicionar-membro.html',
})
export class AdicionarMembroPage {

  photo: string = '';
  nome: any;
  parentesco: any;
  cpf:any;
  extensaoFoto: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private camera: Camera,
    private platform: Platform,
    private globals: Globals,
    private util: IonicUtilProvider,
    private toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    private file: File,
    private registros: RegistrosProvider
  ) {
    Parse.initialize(this.globals.parseAppId, this.globals.parseJsId, this.globals.masterKey);
    Parse.serverURL = this.globals.serverURL;
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  takePicture(){

    if (this.platform.is('cordova')) {

      const actionSheet = this.actionSheetCtrl.create({
        title: 'Escolha a opção ',
        buttons: [
          {
            text: 'Tirar uma foto',
            icon: 'camera',
            handler: () => {
              this._takePicture('camera');
            }
          },
          {
            text: 'Galeria',
            icon: 'images',
            handler: () => {
              this._takePicture('galeria');
            }
          },
          {
            text: 'Cancelar',
            role: 'cancel'
          }
        ]
      });
      actionSheet.present();

    } else {
      this.photo = 'https://octodex.github.com/images/baracktocat.jpg';
    }
  }

  /**
   * Recupera a foto da camera ou galeria
   * @param tipo - camera ou galeria
   */
  public _takePicture(tipo: string) {
    this.util.onLoading('Carregando...');
    let imageSizeWidth = 795;
    let imageSizeHeight = 1141;
    let options = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: imageSizeWidth,
      targetHeight: imageSizeHeight,
      allowEdit: this.platform.is('android'),
      correctOrientation: false,
      saveToPhotoAlbum: false
    };

    if (tipo === 'galeria') {
      options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
    }

    this.camera.getPicture(options).then((imageUri: string) => {
      this.file.resolveLocalFilesystemUrl(imageUri).then((response) => {
        let nativeUrl = this.platform.is('ios') ? response.toInternalURL() : response.nativeURL;
        let start = nativeUrl.lastIndexOf('/') + 1;
        let end = nativeUrl.length;
        let nome = nativeUrl.substring(start, end);
        let path = nativeUrl.substring(0, nativeUrl.lastIndexOf('/'));
        this.file.readAsDataURL(path, nome).then((data) => {
          if(this.getSize(data) <= 5000000) {
            this.extensaoFoto = nome.substr(nome.lastIndexOf('.') + 1);
            this.photo = data;
            this.util.endLoading();
          } else {
            this.util.endLoading();
            this.util.toast('O tamanho máximo de arquivo é 5 MB!');
          }
        }).catch((error) => {
          this.util.endLoading();
          this.util.toast('Erro ao recuperar a foto!');
          console.error('Erro ao recuperar arquivo', error);
        });
      });
    }).catch((error) => {
      this.util.endLoading();
      // this.util.toast('Erro ao recuperar a foto!');
      console.error('Erro ao recuperar foto', error);
    });
  }

  deletePicture(){
    this.photo = '';
  }

  async confirmar(){
    await this.registros.getCPF().then(r => {
      if (r != 'err') this.cpf = r.replace(/[^\d]+/g,'');
    });

    if ((typeof this.nome != 'undefined' && this.nome != '') && (typeof this.parentesco != 'undefined' && this.parentesco != '')) {
      this.util.onLoading('Adicionando membro...');
      let NotificacaoAgente = Parse.Object.extend("membros");
      let notificacao = new NotificacaoAgente();

      notificacao.set("cpfUsuarioLogado", this.cpf);
      notificacao.set("nome", this.nome);
      notificacao.set("parentesco", this.parentesco);
      notificacao.set("foto", this.photo && this.photo !== '' ? new Parse.File(this.nome + '.' + this.extensaoFoto, { base64: this.photo }) : null);

      notificacao.save().then((object) => {
        this.util.endLoading();
        this.viewCtrl.dismiss();
      },
      (error) => {
        console.log('error', error);
      });
    } else {
      this.toastCtrl.create({
        message: `Os campos Nome e Parentesco são obrigatórios`,
        position: 'top',
        duration: 2500
      }).present();
    }
  }

  private getSize( base64: string) {
    return ((4 * base64.length / 3) + 3) & ~3;
  }

}
