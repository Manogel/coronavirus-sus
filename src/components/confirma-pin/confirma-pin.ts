import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { IonicUtilProvider } from '../../providers/ionic-util';
import { LoginProvider } from '../../providers/login.provider';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'confirma-pin-component',
  templateUrl: 'confirma-pin.html'
})
export class ConfirmaPinComponent implements OnInit{

  @Input() emailOfuscado: string;
  @Input() step: number;
  @Input() cpf: string;
  @Input() token: string;
  @Output() respostaPin = new EventEmitter();
  @Input() events: Observable<string>;
  @Input() recuperarSenha: boolean = false;
  public pin: number;

  constructor(
    private platform: Platform,
    private toastCtrl: ToastController,
    private util: IonicUtilProvider,
    private loginProvider: LoginProvider
  ) {}

  ngOnInit() {
    this.events.subscribe((source) => {
      if(source === 'pin') {
        this.continuar();
      }
    });

    if(!this.platform.is('cordova')) {
      this.emailOfuscado = 'p**********@mba***********';
    }
  }

  continuar() {
    if (!this.pin) {
      this.toastCtrl.create({
        message: 'PIN é obrigatório.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }

    this.util.onLoading('Confirmando PIN...');

    if(!this.recuperarSenha) {
      this.loginProvider.confirmacaoIdentidade(this.cpf, this.token, this.pin).then(() => {
        this.util.endLoading();
        this.respostaPin.emit(true);
      }).catch((error) => {
        this.util.endLoading();
        this.toastCtrl.create({
          message: error.descricao,
          position: 'top',
          duration: 4000
        }).present();
      });
    } else {
      this.loginProvider.confirmacaoRSIdentidade(this.cpf, this.token, this.pin).then(() => {
        this.util.endLoading();
        this.respostaPin.emit(true);
      }).catch((error) => {
        this.util.endLoading();
        this.toastCtrl.create({
          message: error.descricao,
          position: 'top',
          duration: 4000
        }).present();
      });
    }
  }

}
