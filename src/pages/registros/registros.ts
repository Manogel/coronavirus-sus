import { Device } from '@ionic-native/device';
import { IonicUtilProvider } from './../../providers/ionic-util';
import { RegistroDeSaudePage } from './../registro-de-saude/registro-de-saude';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { AdicionarMembroPage } from '../adicionar-membro/adicionar-membro';
import { RegistrosProvider } from '../../providers/registros';
import * as moment from 'moment';
import * as Parse from 'parse';

@IonicPage()
@Component({
  selector: 'page-registros',
  templateUrl: 'registros.html',
})
export class RegistrosPage {

  membros: any;
  cpf: any;
  registrosMembros: any;
  sintomas: any;
  isIphoneX: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private util: IonicUtilProvider,
    private registros: RegistrosProvider,
    public alertCtrl: AlertController,
    private device: Device
  ) {
    if (this.device.model === 'iPhone10,3' || this.device.model === 'iPhone10,6' || this.device.model === 'x86_64') {
      this.isIphoneX = true;
    }
  }

  async ionViewDidEnter(){
    console.log('ionViewDidEnter');
    await this.registros.getCPF().then(r => {
      if (r != 'err') this.cpf = r.replace(/[^\d]+/g,'');
    });
    this.loadRecords();
  }

  async loadRecords(){
    console.log('this.cpf', this.cpf);
    this.membros = [];
    if (!this.cpf || this.cpf == ''){
      this.showAlert();
    } else {
      this.util.onLoading('Carregando informações...');
      this.registros.loadMembros(this.cpf).then(async membros => {
        this.membros = membros;
        if (this.membros.length > 0 ){
          this.loadRegistrosMembros();
        } else this.util.endLoading();
      });
    }
  }

  loadRegistrosMembros(){
    this.registros.loadRegistrosMembros(this.cpf).then(registros => {
      this.registrosMembros = registros;
      this.mergeRegistrosMembros();
    });
  }

  async mergeRegistrosMembros(){
    await this.membros.forEach(element => {
      let registros = [];
      registros = this.registrosMembros.filter(reg => {
        return reg.membros.nome == element.nome
      });
      element.registros = registros;
    });
    this.util.endLoading();
  }

  abrirModal(page?, membro?){
    if (!this.cpf){
      this.showAlert();
    } else {
      if (page){
        console.log('membro', membro);
        this.navCtrl.push(RegistroDeSaudePage, {membro: membro});
      } else {
        let modal = this.modalCtrl.create(AdicionarMembroPage);
        modal.present();
        modal.onDidDismiss(() => {
          this.loadRecords();
        });
      }
    }
  }

  showAlert(){
    const alert = this.alertCtrl.create({
      title: 'Atenção!',
      subTitle: 'Você precisa efetuar o login em "Perfil"',
      buttons: ['OK']
    });
    alert.present();
  }

  getFoto(index: number){
    if(this.membros[index].foto){
      if (typeof this.membros[index].foto['url'] != 'undefined'){
        return this.membros[index].foto['url'];
      }
    }
  }

  getDataUltimoRegistro(index: number): String {
    if (this.membros[index].registros){
      if (this.membros[index].registros[0]){
        let mo = moment(this.membros[index].registros[0]['createdAt']).locale('pt-br');
        return mo.format('LLL');
      }
    }
    return 'Sem registros';
  }

  getUltimosSintomas(index: number): String{
    if (this.membros[index].registros){
      let regComSintomas = this.membros[index].registros.filter(sint => {
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

  getTemperatura(index: number): String{
    if (this.membros[index].registros){
      let regComTemp = this.membros[index].registros.filter(sint => {
        return typeof sint['temperatura'] != 'undefined';
      });
      if (regComTemp.length > 0 ){
        return `${regComTemp[0]['temperatura']} °C`;
      }
    }
    return '-'
  }

  getDuracao(index: number): String{
    if (this.membros[index].registros){
      let regComTemp = this.filterArray('duracao', index);
      if (regComTemp.length > 0 ){
        let plu = parseInt(regComTemp[0]['duracao']) > 1 ? 's' : '';
        let d = parseInt(regComTemp[0]['duracao'])
        return `${d} Dia${plu}`;
      }
    }
    return '-'
  }

  filterArray(prop, index: number){
    return this.membros[index].registros.filter(sint => {
      return typeof sint[prop] != 'undefined';
    });
  }

  deleteAlert(item){

    let alert = this.alertCtrl.create({
      title: 'Atenção',
      message: `Deseja excluir o membro ${item.nome}`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Excluir',
          handler: () => {
            this.deletar(item);
          }
        }
      ]
    });
    alert.present();
  }

  async deletar(item){
    this.util.onLoading('Deletando informações...');
    await item.registros.forEach(async registro => {
      console.log('reg', registro);
      let yourClass = Parse.Object.extend("registros");
      let query = new Parse.Query(yourClass);
      await query.get(registro.objectId, {
        success: (obj) => {
          console.log('deleta', obj);
          obj.destroy({});
        },
        error: (object, error) => {
          console.log('error');
        }
       });
      });

      let yourClass = Parse.Object.extend("membros");
      let query = new Parse.Query(yourClass);
      await query.get(item.objectId, {
        success: (member) => {
          console.log('deleta', member);
          member.destroy({});
          this.util.endLoading();
          this.ionViewDidEnter()
        },
        error: (object, error) => {
          console.log('error');
          this.ionViewDidEnter()
        }
      });
  }

}
