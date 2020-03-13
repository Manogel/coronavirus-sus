import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, Events } from 'ionic-angular';
import { NovoRegistroPage } from '../novo-registro/novo-registro';
import * as moment from 'moment';
import { Device } from '@ionic-native/device';
import { RegistrosProvider } from '../../providers/registros';
import { IonicUtilProvider } from '../../providers/ionic-util';

@IonicPage()
@Component({
  selector: 'page-registro-de-saude',
  templateUrl: 'registro-de-saude.html',
})
export class RegistroDeSaudePage {

  informacoes: any;
  isIphoneX: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public modalCtrl: ModalController,
    private device: Device,
    private events: Events,
    private registros: RegistrosProvider,
    private util: IonicUtilProvider
  ){
    if (this.device.model === 'iPhone10,3' || this.device.model === 'iPhone10,6' || this.device.model === 'x86_64') {
      this.isIphoneX = true;
    }
  }

  result = [];

  ngOnInit() {
    this.informacoes = this.navParams.get('membro');
    this.events.subscribe('update-registros', (data) => {
      this.informacoes.registros.unshift(data);
      this.ionViewDidEnter();
    });
  }

  ngOnDestroy() {
    this.events.unsubscribe('update-registros');
  }

  async ionViewDidEnter(){
    // Verifica se usuario esta logado, senao da dismiss na view
    this.util.onLoading('Atualizando informações...');
    await this.registros.getCPF().then(cpf => {
      this.util.endLoading();
      if (cpf == '') {
        this.dismiss()
        return
      }
    })

    this.result = this.groupBy(this.informacoes.registros, (item) => {
      let mo = moment(item['createdAt']).locale('pt-br');
      return [mo.format('L')];
    });
  }

  descricaoRegistro(item): String{
    if (typeof item.sintomas != 'undefined' ){
      return this.getSintomasDescricao(item.sintomas);
    }
    if (typeof item.temperatura != 'undefined' ){
      return `${item.temperatura} °C`;
    }
    if (typeof item.duracao != 'undefined' ){
      let plu = parseInt(item.duracao) > 1 ? 's' : '';
      return `${item.duracao} Dia${plu}`;
    }
    if (typeof item.medicacao != 'undefined' ){
      return this._merdeMedicacaoNome(item.medicacao);
    }
    return '-'
  }

  private _merdeMedicacaoNome(medicacao): String{
    let tempMedicamento = '';
    tempMedicamento = `${medicacao.nome} (${medicacao.dosagem} ${medicacao.unidade})`
    if (medicacao.dataInicio && medicacao.dataFim) {
      let di = moment(medicacao.dataInicio).locale('pt-br');
      let df = moment(medicacao.dataFim).locale('pt-br');
      // return [mo.format('L')];
      tempMedicamento = `${tempMedicamento} Período: ${di.format('L')} - ${df.format('L')}`
    }
    return tempMedicamento
  }

  iconeRegistro(item): String{
  if (typeof item.sintomas != 'undefined' ){
      return 'dds-pulse-registro-icon';
    }
    if (typeof item.temperatura != 'undefined' ){
      return 'dds-termometro-registro-icon';
    }
    if (typeof item.duracao != 'undefined' ){
      return 'dds-calendario-registro-icon';
    }
    if (typeof item.medicacao != 'undefined' ){
      return 'dds-medicamento-registro-icon';
    }
    return '-'
  }

  abrirNovoRegistro(){
    // this.navCtrl.push(NovoRegistroPage, {membro: this.informacoes});
    let modal = this.modalCtrl.create(NovoRegistroPage, {membro: this.informacoes});
    modal.present();

  }

  dismiss(){
    this.viewCtrl.dismiss(null,null,{'animation':'false', 'duration':0});
  }

  getNumeroSintomas(): String{
    if (this.informacoes.registros){
      let regComSintomas = this.informacoes.registros.filter(sint => {
        return typeof sint['sintomas'] != 'undefined';
      });
      if (regComSintomas.length > 0 ){
        return regComSintomas.length
      }
    }
    return '0'
  }

  getDuracao(): String{
    if (this.informacoes.registros){
      let regComTemp = this.filterArray('duracao');
      if (regComTemp.length > 0 ){
        return `${parseInt(regComTemp[0]['duracao'])}`;
      }
    }
    return '0'
  }

  getMedicamentos(): String{
    if (this.informacoes.registros){
      let regComTemp = this.filterArray('medicacao');
      if (regComTemp.length > 0 ){
        return regComTemp.length
      }
    }
    return '0'
  }

  filterArray(prop){
    return this.informacoes.registros.filter(sint => {
      return typeof sint[prop] != 'undefined';
    });
  }

  groupBy( array , f ){
    var groups = {};
    array.forEach( ( o ) => {
      var group = JSON.stringify( f(o) );
      groups[group] = groups[group] || [];
      groups[group].push( o );
    });
    return Object.keys(groups).map( function( group )
    {
      return groups[group];
    })
  }

  formatDate(date): String{
    return moment(date).locale('pt-br').format('LLL');
  }

  getSintomasDescricao(sintomas): String{
    let arraySint: Array<any> = sintomas['sintomas'];
    let sintomasDesc = '';
    arraySint.forEach(element => {
      sintomasDesc = `${element.nome}, ${sintomasDesc}`
    });
    console.log('sintomasDesc', sintomasDesc.substring(0, sintomas.length - 2));
    return sintomasDesc.substring(0, sintomasDesc.length - 2);
  }


}
