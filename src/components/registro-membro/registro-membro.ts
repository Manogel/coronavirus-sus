import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { ActionSheetController, ModalController, Platform } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import * as Parse from 'parse';
import { File } from '@ionic-native/file';
import { IonicUtilProvider } from '../../providers/ionic-util';
import { FotoMembroPage } from '../../pages/foto-membro/foto-membro';

@Component({
  selector: 'registro-membro',
  templateUrl: 'registro-membro.html'
})
export class RegistroMembroComponent {

  @Input() informacoes;
  @Input() showArrow = true;

  photo: string = '';
  nome: any;
  extensaoFoto: string;

  constructor(
    private platform: Platform,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private file: File,
    private util: IonicUtilProvider,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.getFoto();
  }

  getFoto(){
    if(this.informacoes.foto){
      if (typeof this.informacoes.foto['url'] != 'undefined'){
        this.photo = this.informacoes.foto['url'];
      }
    }
  }

  getDataUltimoRegistro(): String {
    if (this.informacoes.registros){
      if (this.informacoes.registros[0]){
        let mo = moment(this.informacoes.registros[0]['createdAt']).locale('pt-br');
        return mo.format('LLL');
      }
    }
    return 'Sem registros'
  }

  getUltimosSintomas(): String{
    if (this.informacoes.registros){
      let regComSintomas = this.informacoes.registros.filter(sint => {
        return typeof sint['sintomas'] != 'undefined';
      });
      if (regComSintomas.length > 0 ){
        let arraySint: Array<any> = regComSintomas[0]['sintomas']['sintomas'];
        let sintomas = '';
        arraySint.forEach(element => {
            sintomas = `${element.nome}, ${sintomas}`
        });
        return sintomas.substring(0, sintomas.length - 2);
      }
    }
    return '-'
  }

  getTemperatura(): String{
    if (this.informacoes.registros){
      let regComTemp = this.informacoes.registros.filter(sint => {
        return typeof sint['temperatura'] != 'undefined';
      });
      if (regComTemp.length > 0 ){
        return `${regComTemp[0]['temperatura']} °C`;
      }
    }
    return '-'
  }

  getDuracao(): String{
    if (this.informacoes.registros){
      let regComTemp = this.filterArray('duracao');
      if (regComTemp.length > 0 ){
        let plu = parseInt(regComTemp[0]['duracao']) > 1 ? 's' : '';
        let d = parseInt(regComTemp[0]['duracao']);
        return `${d} Dia${plu}`;
      }
    }
    return '-'
  }

  filterArray(prop){
    return this.informacoes.registros.filter(sint => {
      return typeof sint[prop] != 'undefined';
    });
  }

  trocarFoto(){
    let buttons: Array<any> = [
      {
        text: 'Tirar uma foto',
        icon: 'camera',
        handler: () => {
          if (this.platform.is('cordova')) this._takePicture('camera');
          else {
            this.photo = 'https://octodex.github.com/images/baracktocat.jpg';
          }
        }
      },
      {
        text: 'Galeria',
        icon: 'images',
        handler: () => {
          this._takePicture('galeria');
        }
      }
    ];

    if(this.photo) {
      buttons.push({
        text: 'Exibir foto',
        icon: 'image',
        handler: () => {
          this.modalController.create(FotoMembroPage, {foto: this.photo}).present();
        }
      });
      buttons.push({
        text: 'Excluir foto',
        icon: 'trash',
        handler: () => {
          this.photo = null;
          this.updatePhoto();
        }
      });
    }

    buttons.push({
      text: 'Cancelar',
      role: 'cancel'
    });
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Escolha a opção ',
      buttons: buttons
    });
    actionSheet.present();
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
            this.updatePhoto(new Parse.File(this.nome + '.' + this.extensaoFoto, { base64: this.photo }));
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

  updatePhoto(file?){
    let Membro = Parse.Object.extend("membros");
    let query = new Parse.Query(Membro);
    query.equalTo("objectId", this.informacoes.objectId);
    query.first({
      success: function(object) {

        if (file) object.set("foto", file);
        else object.set("foto", null);
        object.save();
      },
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    });
  }

  private getSize( base64: string) {
    return ((4 * base64.length / 3) + 3) & ~3;
  }

}
