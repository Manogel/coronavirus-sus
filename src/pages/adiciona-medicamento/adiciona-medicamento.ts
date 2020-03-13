import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';
import { RegistroMedicamentoPage } from '../registro-medicamento/registro-medicamento';
import { IonicUtilProvider } from '../../providers/ionic-util';
import { SaudeProvider } from '../../providers/saude.provider';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-adiciona-medicamento',
  templateUrl: 'adiciona-medicamento.html',
})
export class AdicionaMedicamentoPage {

  unidade = [
    'cc',
    'ml',
    'gr',
    'mg',
    'gotas',
    'frações',
    'pílulas',
    'aspirar',
    'unidades',
    'colher de chá',
    'colher de sopa',
    'ug',
    'ui',
    'mEq',
    'cartela',
    'spray'
  ];

  unidadeSelecionada: any;
  nomeMedicacao:any;
  dosagem: any;
  membro:any;
  dataInicio: any;
  dataFim: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public modalCtrl: ModalController,
    private saudeProvider: SaudeProvider,
    private toastCtrl: ToastController,
    private util: IonicUtilProvider) {
      this.membro = this.navParams.get('membro');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  openMed(){
    let profileModal = this.modalCtrl.create(RegistroMedicamentoPage);
    profileModal.onDidDismiss(medicamento => {
      console.log('Medicamento:', medicamento);
      this.nomeMedicacao = medicamento;
    });
    profileModal.present();
  }

  confirmar(){
    if (typeof this.unidadeSelecionada == 'undefined' || typeof this.nomeMedicacao == 'undefined' || typeof this.dosagem == 'undefined'
    || typeof this.dataFim == 'undefined' || typeof this.dataFim == 'undefined' || this.dosagem == "") {
      this.toastCtrl.create({
        message: `Nome da medicação, dosagem, unidade, data início e data fim são obrigatórios.`,
        position: 'top',
        duration: 3000
      }).present();
    } else {
      if (this.dataInicio > this.dataFim) {
        this.toastCtrl.create({
          message: `A data de início deve ser menor que a data fim do medicamento.`,
          position: 'top',
          duration: 3000
        }).present();
      } else {
        this.util.onLoading('Enviando registro...');
        let medicacao = {
          dosagem: this.dosagem,
          unidade: this.unidadeSelecionada,
          nome: this.nomeMedicacao,
          dataInicio: this.dataInicio,
          dataFim: this.dataFim
        };
        this.saudeProvider.createRegistro({membros:this.membro, medicacao: medicacao}).then(r => {
          this.util.endLoading();
          this.toastCtrl.create({
            message: `Registro salvo com sucesso!`,
            position: 'top',
            duration: 2000
          }).present();
          this.viewCtrl.dismiss();
        });
      }
    }
  }

}
