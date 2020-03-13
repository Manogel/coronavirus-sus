import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { LoginProvider } from '../../providers/login.provider';
import { IonicUtilProvider } from '../../providers/ionic-util';

@Component({
  selector: 'cria-senha-component',
  templateUrl: 'cria-senha.html'
})
export class CriaSenhaComponent implements OnInit{

  @Input() step: number;
  @Input() cpf: string;
  @Input() token: string;
  @Input() events: Observable<string>;
  @Input() recuperarSenha: boolean = false;
  @Output() respostaSenha = new EventEmitter();
  public senha: string;
  public confirmacaoSenha: string;

  constructor(
    private toastCtrl: ToastController,
    private loginProvider: LoginProvider,
    private util: IonicUtilProvider
  ) {}

  ngOnInit() {
    if(this.events) {
      this.events.subscribe((source) => {
        if(source === 'senha') {
          this.continuar();
        }
      })
    }
  }

  continuar() {
    this.verificarSenhaInvalida();
    this.util.onLoading('Cadastrando senhas ...');

    if(!this.recuperarSenha) {
      let obj={
        "senha" : this.senha,
        "senhaConfirmacao" : this.confirmacaoSenha
      };
      this.loginProvider.finalizacao(this.cpf, this.token, obj).then(() => {
        this.util.endLoading();
        this.respostaSenha.emit(true);
      }).catch((error) => {
        this.util.endLoading();
        this.toastCtrl.create({
          message: error.descricao,
          position: 'top',
          duration: 2500
        }).present();
      });
    } else {
      let obj={
        "senhaNova" : this.senha,
        "senhaNovaConfirmacao" : this.confirmacaoSenha
      };
      this.loginProvider.finalizacaoRS(this.cpf, this.token, obj).then(() => {
        this.util.endLoading();
        this.respostaSenha.emit(true);
      }).catch((error) => {
        this.util.endLoading();
        this.toastCtrl.create({
          message: error.descricao,
          position: 'top',
          duration: 2500
        }).present();
      });
    }
  }

  private verificarSenhaInvalida() {
    if (!this.senha || this.senha.length < 8) {
      this.toastCtrl.create({
        message: 'Senha deve conter no mínimo 8 caracteres.',
        position: 'top',
        duration: 2500
      }).present();
      return true;
    }
    if (this.senha.length > 12) {
      this.toastCtrl.create({
        message: 'Senha não deve ultrapassar 12 caracteres.',
        position: 'top',
        duration: 2500
      }).present();
      return true;
    }
    if (this.confirmacaoSenha !== this.senha) {
      this.toastCtrl.create({
        message: 'Senha de confirmação não confere.',
        position: 'top',
        duration: 2500
      }).present();
      return true;
    }
    return false;
  }

}
