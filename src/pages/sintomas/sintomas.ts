import { RegistrosProvider } from '../../providers/registros';
import { Component, ViewChild } from '@angular/core';
import { NavParams, ModalController, NavController, ViewController, Events, Content } from 'ionic-angular';
import { ModalPage } from "../modal/modal";
import { SaudeProvider } from '../../providers/saude.provider';
import { Device } from '@ionic-native/device';
import { Geolocation } from '@ionic-native/geolocation';
import * as _ from 'underscore';
import * as Parse from 'parse';
import { SintomasListProvider } from '../../providers/sintomas-list.provider';
import { IonicUtilProvider } from '../../providers/ionic-util';
import { SuspeitoPage } from '../suspeito/suspeito';
import { NaoSuspeitoPage } from '../nao-suspeito/nao-suspeito';

@Component({
  selector: "page-sintomas",
  templateUrl: "sintomas.html"
})
export class SintomasPage {
  sintomasList: any = [];
  sintomasFiltro: any = [];
  sintomas: any = {};
  sint = [];
  status: any;
  membro: any;
  cpf: string;
  outrosSintomas: string = "";
  showPaises: boolean;
  paises: Array<any> = [];
  paisesSelecionados: Array<any> = [];
  confirmado: any = undefined;
  suspeito: any = undefined;
  foraPais: any;

  @ViewChild(Content) content: Content;

  constructor(
    public navCtrl: NavController,
    private saudeProvider: SaudeProvider,
    public navParams: NavParams,
    private geolocation: Geolocation,
    public modalCtrl: ModalController,
    private viewCtrl: ViewController,
    private device: Device,
    private sintomasListProvider: SintomasListProvider,
    private registros: RegistrosProvider,
    private util: IonicUtilProvider,
    private events: Events
  ) {
    this.status = this.navParams.get("status");
    this.membro = this.navParams.get("membro");
    this.util.onLoading("Carregando sintomas...");
    if (typeof this.status == "undefined") {
      this.sintomasListProvider.sintomas(true);
      this.events.subscribe("get-sintomas-list", sintomas => {
        this.sintomasList = [];
        this.sintomasList = sintomas;
        this.util.endLoading();
      });
    } else {
      this.getSintomas();
    }
  }

  ngOnDestroy() {
    this.events.unsubscribe("get-sintomas-list");
    this.events.unsubscribe("update-sintomas-list");
  }

  getSintomas() {
    this.sintomasListProvider.sintomas();
    this.events.subscribe("update-sintomas-list", sintomas => {
      this.sintomasList = [];
      this.sintomasList = sintomas;
      this.sintomasList.forEach(element => {
        if (this.navParams.get("sintomasFiltro")) {
          this.navParams.get("sintomasFiltro").some(sint => {
            if (sint.id == element.id) element.isSelected = sint.isSelected;
            return sint.id == element.id;
          });
        }
      });
      this.util.endLoading();
    });
  }

  selectSintoma(sintoma?) {
    if (this.status) {
      sintoma.isSelected = !sintoma.isSelected;
    } else {
      sintoma.isSelected = !sintoma.isSelected;
      if (sintoma.id in this.sintomas) {
        delete this.sintomas[sintoma.id];
        let index = _.findIndex(this.sint, function(item: any) {
          return item == sintoma.nome;
        });
        this.sint.splice(index, 1);
      } else {
        this.sint.push({
          id: sintoma.id,
          nome: sintoma.nome
        });
        this.sintomas[sintoma.id] = sintoma;
      }
    }
  }

  selectPaises(index, pais?) {
    pais.isSelected = !pais.isSelected;
    let hasInSelecteds =
      this.paisesSelecionados.filter(paisSelecionado => {
        return paisSelecionado.id === pais.objectId;
      }).length > 0;
    if (hasInSelecteds) {
      this.paisesSelecionados = this.paisesSelecionados.filter(
        paisSelecionado => {
          return paisSelecionado.id !== pais.objectId;
        }
      );
    } else {
      this.paisesSelecionados.push({
        id: pais.objectId,
        nome: pais.nome
      });
    }
  }

  async confirmar() {
    if (this.showPaises) {
      this.geolocation.getCurrentPosition().then(pos => {
        let pontos = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          estou_bem: false,
          sintomas: this.sint,
          device: this.device.uuid,
          cpfUsuarioLogado: undefined,
          paises: this.foraPais === 'sim' ? this.paisesSelecionados : [],
          foraPais: this.foraPais,
          contatoConfirmado: this.confirmado,
          contatoSuspeito: this.suspeito
          // cpfUsuarioLogado: this.cpf
        };

        this.saudeProvider.createPonto(pontos).then(r => {
          if (this.membro) {
            this.saudeProvider
              .createRegistro({ sintomas: r, membros: this.membro })
              .then(r => {
                this.events.publish("update-localidades");
              });
          }
        });
      });
      this.navCtrl.pop();
      let hasFebreInSintomas = !!this.sint.filter((s) => {
        return s.nome === 'Febre'
      }).length;

      if ((!hasFebreInSintomas && this.sint.length <= 1) || this.sint.length === 1) {
        this.openModalNaoSuspeitoPage();
      } else {
        if ((this.confirmado === 'sim' || this.suspeito === 'sim') || (this.foraPais === 'sim' && this.paisesSelecionados.length >= 1)) {
          this.openModalSuspeitoPage();
        } else {
          this.openModalNaoSuspeitoPage();
        }
      }
    } else {
      const Classe = Parse.Object.extend('paises');
      const query = new Parse.Query(Classe);
      query.limit(2000);
      query.ascending('nome');
      let paises = await query.find();
      this.paises = JSON.parse(JSON.stringify(paises));
      this.showPaises = true;
      this.content.scrollToTop();
    }
  }

  openModalPage() {
    this.modalCtrl.create(ModalPage,
      { showModalInfo: true, comoEstou: "mal", sintomas: this.sint },
      {
        enterAnimation: 'fade-transition',
        leaveAnimation: 'fade-transition',
        cssClass: 'modal-confirmar-sintoma-page'
      }).present();
  }

  openModalNaoSuspeitoPage() {
    this.modalCtrl.create(NaoSuspeitoPage,
      {
        enterAnimation: 'fade-transition',
        leaveAnimation: 'fade-transition',
        cssClass: 'modal-confirmar-sintoma-page'
      }).present();
  }

  openModalSuspeitoPage() {
    this.modalCtrl.create(SuspeitoPage,
      {
        enterAnimation: 'fade-transition',
        leaveAnimation: 'fade-transition',
        cssClass: 'modal-confirmar-sintoma-page'
      }).present();
  }

  voltar() {
    this.foraPais = undefined;
    this.paisesSelecionados = [];
    this.showPaises = false;
    this.content.scrollToTop();
  }

  filtrarSintomas() {
    this.dismiss({ filter: true, sintomasList: this.sintomasList });
  }

  dismiss(s?) {
    this.viewCtrl.dismiss(s, null, { animation: "false", duration: 0 });
  }
}
