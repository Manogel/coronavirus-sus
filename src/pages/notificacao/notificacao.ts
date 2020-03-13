import { Component, ViewChild } from '@angular/core';
import {
  Content,
  Events,
  IonicPage,
  NavController,
  NavParams,
  Slides,
  ToastController,
  ViewController
} from 'ionic-angular';
import * as Parse from 'parse';
import { Globals } from '../../providers/globals';
import { IonicUtilProvider } from '../../providers/ionic-util';
import { RegistrosProvider } from '../../providers/registros';

@IonicPage()
@Component({
  selector: 'page-notificacao',
  templateUrl: 'notificacao.html',
})
export class NotificacaoPage {

  @ViewChild('slides') slider: Slides;
  @ViewChild(Content) content: Content;

  stepPager = [{finish: false}, {finish: false}, {finish: false}];

  nextButton = 'Próximo';

  descricaoDoCaso: any;
  localizacao: any;
  notificador: any;

  indexSlide = 0;
  cpf:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private events: Events,
    private globals: Globals,
    private util: IonicUtilProvider,
    private registros: RegistrosProvider
  ) {
    Parse.initialize(this.globals.parseAppId, this.globals.parseJsId, this.globals.masterKey);
    Parse.serverURL = this.globals.serverURL;
    delete this.notificador
  }

  ngOnInit() {
    this._slideToast();
    this._setDescricaoDoCaso();
    this._setLocalizacao();
    this._setNotificador();
    this.scrollTo();
  }

  ngOnDestroy() {
    this.events.unsubscribe('slideToast');
    this.events.unsubscribe('set-descricao-do-caso');
    this.events.unsubscribe('set-localizacao');
    this.events.unsubscribe('set-notificador');
    this.events.unsubscribe('scrollToItem');
  }

  private _setNotificador(){
    this.events.subscribe('set-notificador', (data) => {
      this.notificador = data;
      this.stepPager[0].finish = true;
      this.indexSlide = 1;
      setTimeout(() => {
        this.content.scrollTo(0, 0, 0);
    }, 500);
    });
  }

  private _setDescricaoDoCaso(){
    this.events.subscribe('set-descricao-do-caso', (data) => {
      this.descricaoDoCaso = data;
      this.stepPager[1].finish = true;
      this.indexSlide = 2;
    });
  }

  private _setLocalizacao(){
    this.events.subscribe('set-localizacao', async (data) => {

      await this.registros.getCPF().then(r => {
        if (r != 'err') this.cpf = r.replace(/[^\d]+/g,'');
      });

      this.util.onLoading('Enviando notificação...');

      this.localizacao = data;
      this.stepPager[2].finish = true;
      this.enviaDadosNotificacao();
    });
  }

  private enviaDadosNotificacao(){
    // salva notificacao
    var NotificacaoAgente = Parse.Object.extend("notificacoesAgente");
    var notificacao = new NotificacaoAgente();

    notificacao.set("situacaoNotificada", this.descricaoDoCaso.situacaoNotificadaChecked);
    notificacao.set("principalSuspeita", this.descricaoDoCaso.principalSuspeita);
    notificacao.set("casosSuspeitosEConfirmados", this.descricaoDoCaso.casosSuspeitosEConfirmados);
    notificacao.set("descricaoSituacao", this.descricaoDoCaso.descricaoSituacao);

    notificacao.set("localOcorrencia", this.localizacao.localOcorrencia);
    notificacao.set("estadoDaOcorrencia", this.localizacao.estadoDaOcorrencia);
    notificacao.set("municipioDaOcorrencia", this.localizacao.municipioDaOcorrencia);

    notificacao.set("origemNotificacao", this.notificador.origemNotificacao);
    notificacao.set("outraOrigem", this.notificador.outraOrigem);
    notificacao.set("nomeNotificador", this.notificador.nomeNotificador);
    notificacao.set("profissaoOcupacaoNotificador", this.notificador.profissaoOcupacaoNotificador);
    notificacao.set("estadoNotificador", this.notificador.estadoNotificador);
    notificacao.set("municipioNotificador", this.notificador.municipioNotificador);
    notificacao.set("telefoneNotificador", this.notificador.telefoneNotificador);
    notificacao.set("emailNotificador", this.notificador.emailNotificador);
    notificacao.set("cpfUsuarioLogado", this.cpf);

    notificacao.save().then((object) => {
      console.log('salvo', object);

      delete this.descricaoDoCaso;
      delete this.localizacao;
      delete this.notificador;
      this.util.endLoading();
      this.viewCtrl.dismiss({notificacaoSucesso: true});
    },
    (error) => {
      this.util.endLoading();
      console.log('error', error);
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  goto() {
    switch ( this.indexSlide ) {
      case 0: {
        this.events.publish('get-notificador');
        break
      }
      case 1: {
        this.events.publish('get-descricao-do-caso');
        break
      }
      case 2: {
        this.events.publish('get-localizacao');
        break
      }
    }
  }

  backto(){
    if (this.indexSlide != 0) this.indexSlide--;
    setTimeout(() => {
      switch ( this.indexSlide ) {
        case 0: {
          this.events.publish('get-notificador', {dadosNotificador: this.notificador});
          break
        }
        case 1: {
          this.events.publish('get-descricao-do-caso', {descricao: this.descricaoDoCaso});
          break
        }
        case 2: {
          this.events.publish('get-localizacao', {localizacao: this.localizacao});
          break
        }
      }
    }, 100);
  }

  private _slideToast(){
    this.events.subscribe('slideToast', (slide, descricaoCampo, nomeCampo) => {
      console.log(slide, descricaoCampo, nomeCampo);
      // this.slider.slideTo(slide,1000);
      this.showToast(descricaoCampo, nomeCampo);
    });
  }


  showToast(descricaoCampo, nomeCampo){
    this.toastCtrl.create({
      message: `O campo "${descricaoCampo}" é obrigatório.`,
      position: 'top',
      duration: 2500
    }).present();
    var topPos = document.getElementById(nomeCampo).offsetTop;
    console.log('topPos', topPos);
    // setTimeout(() => {
    // }, 500);
    this.content.scrollTo(0, topPos, 500);
  }

  scrollTo(){
    // this.events.subscribe('scrollToItem', (item) => {
    //   console.log('subScroll', item);
    //   var topPos = document.getElementById(item).offsetTop;
    //   this.content.scrollTo(0, topPos, 500);
    // });
  }

  slideChanged(){
    // console.log('this.slider.getActiveIndex();', this.slider.getActiveIndex());
    this.indexSlide = this.slider.getActiveIndex();
    if (this.slider.getActiveIndex() == 2) this.nextButton = 'Enviar';
  }

}
