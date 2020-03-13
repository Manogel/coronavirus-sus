import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicUtilProvider } from '../../providers/ionic-util';
import { LoginProvider } from '../../providers/login.provider';
import { Platform, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'perguntas-component',
  templateUrl: 'perguntas.html'
})
export class PerguntasComponent implements OnInit{

  @Input() cpf: string;
  @Input() token: string;
  @Output() respostaPerguntas = new EventEmitter();
  @Input() step: number;
  @Input() events: Observable<string>;
  @Input() perguntas: any = null;

  public arrayPerguntas: any;
  public resposta1: any;
  public resposta2: any;
  public resposta3: any;

  constructor(
    private util: IonicUtilProvider,
    private loginProvider: LoginProvider,
    private platform: Platform,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    if(this.events) {
      this.events.subscribe((source) => {
        if(source === 'perguntas') {
          this.continuar();
        }
      });
    }
    console.log('está em preguntas component', this.perguntas);
    if(this.perguntas === undefined || Object.keys(this.perguntas).length <= 0) {
      this.getPerguntas();
    } else {
      console.log('passou aqui');
      this.arrayPerguntas = Object.keys(this.perguntas);
      console.log('arrayPerguntas', this.arrayPerguntas);
    }
  }

  getPerguntas() {
    this.util.onLoading('Carregando perguntas...');
    if(!this.platform.is('cordova')) {
      this.perguntas = {
        pergunta1: {
          codigo: "1",
          pergunta: "Qual é o ano do seu nascimento?",
          respostas: ["1980","1981","1982","1983","1984"]
        },
        pergunta2: {
          codigo: "4",
          pergunta: "Qual é o primeiro nome da sua mãe?",
          respostas: ["JOANA","MARIA","MONICA","REGINA","GABRIELA"]
        },
        pergunta3: {
          codigo: "2",
          pergunta: "Qual é o seu mês de nascimento?",
          respostas: ["JANEIRO","FEVEREIRO","ABRIL","JULHO","DEZEMBRO"]
        }
      };
      this.arrayPerguntas = Object.keys(this.perguntas);
    } else {
      this.loginProvider.inicializacaoKbaRFB(this.cpf, this.token).then((perguntas) => {
        this.util.endLoading();
        this.perguntas = perguntas;
        this.arrayPerguntas = Object.keys(this.perguntas);
      }).catch((error) => {
        console.log('retorno', error);
        this.util.endLoading();
        this.toastCtrl.create({
          message: error.descricao,
          position: 'top',
          duration: 4000
        }).present();
      })
    }
  }

  selecionarResposta(keyResposta, resposta) {
    switch ( keyResposta ) {
      case 'pergunta1': {
        this.resposta1 = resposta;
        break;
      }
      case 'pergunta2': {
        this.resposta2 = resposta;
        break;
      }
      case 'pergunta3': {
        this.resposta3 = resposta;
        break;
      }
    }
  }

  continuar() {
    if (this.resposta1 && this.resposta2 && this.resposta3) {
      this.util.onLoading('Enviando respostas...');
      let respostas = {
        "resposta1": this.resposta1,
        "resposta2": this.resposta2,
        "resposta3": this.resposta3
      };

      this.loginProvider.finalizacaoKbaRFB(this.cpf, this.token, respostas).then((response: any) => {
        this.util.endLoading();
        this.respostaPerguntas.emit(response.emailOfuscado);
      }).catch((error) => {
        this.util.endLoading();
        this.toastCtrl.create({
          message: error.descricao,
          position: 'top',
          duration: 4000
        }).present();
      })
    } else {
      this.util.endLoading();
      this.toastCtrl.create({
        message: 'Você precisa responder as perguntas .',
        position: 'top',
        duration: 2500
      }).present();
    }
  }
}
