import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicPage, Slides, ToastController, ViewController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { Iniciacao } from '../../models/Iniciacao';

@IonicPage()
@Component({
  selector: 'page-recuperar-senha',
  templateUrl: 'recuperar-senha.html',
})
export class RecuperarSenhaPage {

  @ViewChild(Slides) slides: Slides;
  public eventsSubject: Subject<string> = new Subject<string>();
  public iniciacao: Iniciacao;
  public cpf: string;
  public step: number = 1;

  constructor(
    private viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
  }

  getRespostaCaptcha(obj: any) {
    if(obj) {
      this.iniciacao = new Iniciacao(obj.iniciacao);
      this.cpf = obj.cpf;
      this.step ++;
      this.nextSlider();
      return;
    }
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
      this.viewCtrl.dismiss();
    }

    this.toastCtrl.create({
      message: successSenha ? 'Senha alterada com sucesso!' : 'Erro ao alterar a senha!',
      position: 'top',
      duration: 2500
    }).present();
  }

  private nextSlider() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  continuar() {
    let sourceEvent = this.step === 1 ? 'captcha' : this.step === 2 ? 'pin' : null;
    console.log('sourceEvent', sourceEvent);
    this.eventsSubject.next( sourceEvent );
  }

  concluir() {
    this.eventsSubject.next( 'senha' );
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
}
