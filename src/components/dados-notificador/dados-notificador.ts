import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
  selector: 'dados-notificador',
  templateUrl: 'dados-notificador.html'
})
export class DadosNotificadorComponent {

  @ViewChild('outraOrigem') outraOrigemInput: ElementRef;
  @Input() dadosNotificador: any;

  origemNotificacao: any;
  outraOrigem = '';
  nomeNotificador = '';
  profissaoOcupacaoNotificador = '';
  estadoNotificador: any;
  municipioNotificador = '';
  telefoneNotificador = '';
  emailNotificador = '';
  origemNotificacaoOpt = ['Secretaria Estadual de Saúde (vigilância)', 'Secretaria Municipal de Saúde (vigilância)', 'Serviço de saúde pública', 'Serviço de saúde privada', 'Profissional de saúde autônomo', 'Laboratório público', 'Laboratório privado', 'População'];
  estados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

  firstFocus = true;

  constructor(
    private events: Events
    ) {
      this.events.subscribe('get-notificador', (dados: any) => {
        if(dados && dados.dadosNotificador) {
          this.origemNotificacao = dados.dadosNotificador.origemNotificacao;
          this.outraOrigem = dados.dadosNotificador.outraOrigem;
          this.nomeNotificador = dados.dadosNotificador.nomeNotificador;
          this.profissaoOcupacaoNotificador = dados.dadosNotificador.profissaoOcupacaoNotificador;
          this.estadoNotificador = dados.dadosNotificador.estadoNotificador;
          this.municipioNotificador = dados.dadosNotificador.municipioNotificador;
          this.telefoneNotificador = dados.dadosNotificador.telefoneNotificador;
          this.emailNotificador = dados.dadosNotificador.emailNotificador;
        } else this._getDados();
      });
  }

  ngOnDestroy() {
    this.events.unsubscribe('get-notificador');
  }

  private _getDados(){
    if (this.origemNotificacao == 'Selecione' || typeof this.origemNotificacao == 'undefined'){
      this.events.publish('slideToast', 2,'Origem da notificação', 'origemNotificacao');
      return;
    }
    if (this.nomeNotificador == ''){
      this.events.publish('slideToast', 2,'Nome', 'nomeNotificador');
      return;
    }
    if (this.profissaoOcupacaoNotificador == ''){
      this.events.publish('slideToast', 2,'Profissão ou ocupação', 'profissaoNotificador');
      return;
    }
    if (this.estadoNotificador == 'Selecione' || typeof this.estadoNotificador == 'undefined'){
      this.events.publish('slideToast', 2,'Estado', 'estadoNotificador');
      return;
    }
    if (this.municipioNotificador == ''){
      this.events.publish('slideToast', 2,'Município', 'municipioNotificadorInput');
      return;
    }
    if (this.telefoneNotificador == ''){
      this.events.publish('slideToast', 2,'Telefone', 'telefoneNotificadorInput');
      return;
    }
    if (this.emailNotificador == ''){
      this.events.publish('slideToast', 2,'E-mail', 'emailNotificadorInput');
      return;
    }
    this.events.publish('set-notificador', {
      'origemNotificacao': this.origemNotificacao,
      'outraOrigem': this.outraOrigem,
      'nomeNotificador': this.nomeNotificador,
      'profissaoOcupacaoNotificador': this.profissaoOcupacaoNotificador,
      'estadoNotificador': this.estadoNotificador,
      'municipioNotificador': this.municipioNotificador,
      'telefoneNotificador': this.telefoneNotificador,
      'emailNotificador': this.emailNotificador
    });
    this.events.publish('changeSlide', true);
  }

  focusItem(item){
    if (this.firstFocus){
      let activeElement = <HTMLElement>document.activeElement;
      activeElement && activeElement.blur && activeElement.blur();
      this.firstFocus = false;
    }
  }

  changeSelect(){
    this.firstFocus = true;
  }

}
