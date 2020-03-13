import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicPage, Slides, ToastController, ViewController } from 'ionic-angular';
import { IonicUtilProvider } from '../../providers/ionic-util';
import { Iniciacao } from '../../models/Iniciacao';
import { Subject } from 'rxjs/Subject';

@IonicPage()
@Component({
  selector: 'page-primeiro-acesso',
  templateUrl: 'primeiro-acesso.html',
})
export class PrimeiroAcessoPage {

  @ViewChild(Slides) slides: Slides;
  public eventsSubject: Subject<string> = new Subject<string>();

  public step: number = 1;
  public showInfoBasicasBC: boolean = false;
  public iniciacao: Iniciacao;
  public cpf: string;
  public emailOfuscado: string;
  public perguntas: any;

  constructor(
    private viewCtrl: ViewController,
    private util: IonicUtilProvider,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
  }

  close() {
    let alert = this.alertCtrl.create({
      title: 'Você tem certeza que deseja sair?',
      subTitle: 'Se sair você vai perder todas as informações aqui inseridas!',
      buttons: [{
        text: 'Confirmar',
        handler: data => {
          this.viewCtrl.dismiss();
        }
      },{
        text: 'Cancelar',
        role: 'cancel'
      }]
    });
    alert.present();

    alert.onDidDismiss((retorno) => {
      if(retorno) this.viewCtrl.dismiss();
    });
  }

  getRespostaCaptcha(obj: any) {
    if(obj) {
      this.iniciacao = new Iniciacao(obj.iniciacao);
      this.cpf = obj.cpf;
      if(this.iniciacao.existeCNS) {
        this.step ++;
        this.nextSlider();
        return;
      } else if(!this.iniciacao.existeCNS && !this.iniciacao.existeDNI) {
        this.step ++;
        this.showInfoBasicasBC = true;
        this.nextSlider();
        return;
      } else if(!this.iniciacao.existeCNS && this.iniciacao.existeDNI) {
        this.toastCtrl.create({
          message: 'Você deve prosseguir com o cadastro no portal do Brasil Cidadão.',
          position: 'top',
          duration: 2500
        }).present();
      }
      this.util.endLoading();
    }
  }

  getRespostaInformacoesBC(perguntas: any) {
    if(perguntas) {
      this.perguntas = perguntas;
      this.showInfoBasicasBC = true;
      this.step ++;
      this.nextSlider();
      return;
    }
  }

  getRespostaPerguntasBC(emailOfuscado: string) {
    this.emailOfuscado = emailOfuscado;
    this.step ++;
    this.nextSlider();
    return;
  }

  getRespostaPin(successPin: boolean) {
    if(successPin) {
      this.step ++;
      this.nextSlider();
      return;
    }
  }

  getRespostaSenha(successSenha: boolean) {
    if(successSenha) {
      this.step ++;
      this.nextSlider();
      return;
    }
  }

  concluir() {
    this.viewCtrl.dismiss();
  }

  private nextSlider() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  continuar() {
    let sourceEvent = this.step === 1 ? 'captcha' : this.step === 2 && this.showInfoBasicasBC ? 'informacoes' :
      this.step === 2 && !this.showInfoBasicasBC ? 'perguntas' : this.step === 3 && this.showInfoBasicasBC ? 'perguntas' :
        this.step === 3 && !this.showInfoBasicasBC ? 'pin' : this.step === 4 && this.showInfoBasicasBC ? 'pin' :
          this.step === 4 && !this.showInfoBasicasBC ? 'senha' : this.step === 5 && this.showInfoBasicasBC ? 'senha' : null;
    this.eventsSubject.next(sourceEvent);
  }
}
