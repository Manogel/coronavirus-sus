import { SaudeProvider } from '../../providers/saude.provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, AlertController } from 'ionic-angular';
import { IonicUtilProvider } from '../../providers/ionic-util';
import * as Parse from 'parse';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-registro-medicamento',
  templateUrl: 'registro-medicamento.html',
})
export class RegistroMedicamentoPage {

  searchQuery: string = '';
  medicamentosServe: any;
  medicamentos: Array<{descricao, checked}> = [];
  membro:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private util: IonicUtilProvider,
    private saudeProvider: SaudeProvider,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public http: HttpClient) {

      this.membro = this.navParams.get('membro');
      this.util.onLoading('Carregando informações...');
      this.http.get('http://gerenciadorapi.saude.gov.br/mba-mmcore/medsus/medicamentos').subscribe(data => {
        this.medicamentosServe = data;
        this.initializeItems();
      }, err => {
        Parse.Cloud.run('getMedicamentos').then((medicamentos)=> {
          let tempArray = [];
          medicamentos.forEach(med => tempArray.push({nome: med}));
          this.medicamentosServe = tempArray;
          this.initializeItems();
        });
        this.util.endLoading();
      });
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  selectItem(item){
    let alert = this.alertCtrl.create({
      title: 'Confirmar',
      message: `Deseja salvar ${item.descricao} nos registros?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Sim',
          handler: () => {
            this.viewCtrl.dismiss(item.descricao);
          }
        }
      ]
    });
    alert.present();
  }

  initializeItems(){
    this.medicamentos = [];
    this.medicamentosServe.forEach(med => {
      this.medicamentos.push({
        descricao: med.nome,
        checked: false
      });
    });
    this.util.endLoading();
  }

  getItems(ev: any) {
    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.medicamentos = this.medicamentos.filter((item) => {
        return (item.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  confirmar(){
    let selected = this.medicamentos.filter(med => {
      return med.checked
    });
    if (selected.length != 0){
      this.util.onLoading('Enviando registro...');
      this.saudeProvider.createRegistro({membros:this.membro, medicamento: selected[0].descricao}).then(r => {
        this.util.endLoading();
        this.toastCtrl.create({
          message: `Registro salvo com sucesso!`,
          position: 'top',
          duration: 1500
        }).present();
        this.viewCtrl.dismiss();
      });
    } else {
      this.toastCtrl.create({
        message: `Selecione um medicamento!`,
        position: 'top',
        duration: 1500
      }).present();
    }
  }
}
