import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InformacoesBasicasBC } from '../../models/InformacoesBasicasBC';
import { ToastController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login.provider';
import { Observable } from 'rxjs/Observable';
import { IonicUtilProvider } from '../../providers/ionic-util';

@Component({
  selector: 'informacoes-basicas-bc-component',
  templateUrl: 'informacoes-basicas-bc.html',
})
export class InformacoesBasicasBcComponent implements OnInit {

  @Input() cpf: string;
  @Input() token: string;
  @Input() step: number;
  @Input() events: Observable<string>;

  public informacoesBasicasBC: InformacoesBasicasBC = new InformacoesBasicasBC();

  @Output() respostaInformacoes = new EventEmitter();

  constructor(
    private toastCtrl: ToastController,
    private loginProvider: LoginProvider,
    private util: IonicUtilProvider
  ) {}

  ngOnInit() {
    if(this.events) {
      this.events.subscribe((source) => {
        if(source === 'informacoes') {
          this.continuar();
        }
      });
    }
  }

  continuar() {
    if (!this.informacoesBasicasBC.nomeCompleto) {
      this.toastCtrl.create({
        message: 'É obrigatório informar um nome.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }

    if (!this.informacoesBasicasBC.email ) {
      this.toastCtrl.create({
        message: 'É obrigatório informar um email.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }
    if (!this.informacoesBasicasBC.emailConfirmacao ) {
      this.toastCtrl.create({
        message: 'É obrigatório informar um email de confirmação.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }
    if (this.informacoesBasicasBC.emailConfirmacao != this.informacoesBasicasBC.email) {
      this.toastCtrl.create({
        message: 'Email e Email de Confirmação são diferentes.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }

    this.util.onLoading('Cadastrando informações ...');
    this.loginProvider.informacoesBasicasBC(this.cpf, this.token, this.informacoesBasicasBC).then(() => {
      this.loginProvider.inicializacaoKbaRFB(this.cpf, this.token).then((result) => {
        this.util.endLoading();
        this.respostaInformacoes.emit(result);
      })
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
