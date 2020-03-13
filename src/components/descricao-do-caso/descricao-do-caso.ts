import { Events } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'descricao-do-caso',
  templateUrl: 'descricao-do-caso.html'
})
export class DescricaoDoCasoComponent {

  situacaoNotificada = [
    {'descricao':'Caso suspeito de doença de notificação imediata', 'checked': false},
    {'descricao':'Caso suspeito de doença ou agravo de causa desconhecida', 'checked': false},
    {'descricao':'Surto ou agregado de casos com sinais e sintomas semelhantes, independente da doença', 'checked': false},
    {'descricao':'Doença ou morte de animais por causa desconhecida (aves, cavalos, morcegos, etc)', 'checked': false}
  ];
  casosSuspeitosEConfirmados = [
    {'descricao': 'Total de casos suspeitos (vivos):', 'valor': 0},
    {'descricao': 'Total de casos suspeitos (óbitos):', 'valor': 0},
    {'descricao': 'Total de casos confirmados (vivos):', 'valor': 0},
    {'descricao': 'Total de casos confirmados (óbitos):', 'valor': 0}
  ];
  situacaoNotificadaChecked: any;
  principalSuspeita: any;
  descricaoSituacao = '' ;

  principaisSuspeitasOpt = ['Botulismo', 'Cólera', 'Doença com suspeita de disseminação intencional (antraz pneumônico, tularemia ou varíola)', 'Doença pelo vírus arenavírus', 'Doença pelo vírus ebola', 'Doença pelo vírus lassa', 'Doença pelo vírus marburg', 'Eventos adversos graves ou óbitos pós-vacinação', 'Febre amarela', 'Febre de chikungunya', 'Febre do nilo ocidental e outras arboviroses de importância em saúde pública', 'Febre maculosa e outras riquetsioses', 'Febre purpúrica brasileira', 'Influenza humana por novo subtipo viral', 'Malária na região extra amazônica', 'Óbito por dengue', 'Peste', 'Poliomielite por poliovírus selvagem', 'Raiva humana', 'Rubéola ou Síndrome da Rubéola Congênita', 'Sarampo', 'Síndrome da paralisia flácida aguda', 'Síndrome respiratória aguda grave associada ao coronavírus (MERS-CoV e SARS-CoV)'];

  constructor(private events: Events) {}

  ngOnInit() {
    this.events.subscribe('get-descricao-do-caso', (dados) => {
      if(dados && dados.descricao) {
        this.situacaoNotificada.some(sit => {
          if (sit.descricao == dados.descricao.situacaoNotificadaChecked) sit.checked = true
          return sit.descricao == dados.descricao.situacaoNotificadaChecked;
        });
        this.situacaoNotificadaChecked = dados.descricao.situacaoNotificadaChecked;
        this.casosSuspeitosEConfirmados = dados.descricao.casosSuspeitosEConfirmados;
        this.principalSuspeita = dados.descricao.principalSuspeita;
        this.descricaoSituacao = dados.descricao.descricaoSituacao;

      } else {
        this._getDados();
      }
    });
  }

  ngOnDestroy() {
    this.events.unsubscribe('get-descricao-do-caso');
  }

  updateCheckbox(item){
    this.situacaoNotificada.forEach(sit => sit.checked = false);
  }

  subtraiCaso(item){
    if (item.valor != 0) item.valor = item.valor - 1;
    if (item.valor < 0) item.valor = 0;
  }

  somaCaso(item){
    item.valor = item.valor + 1;
  }

  private _getDados(){
    if (this.situacaoNotificada.filter( value => {
      if (value.checked == true) this.situacaoNotificadaChecked = value.descricao;
      return value.checked == true
    }).length != 1){
      this.events.publish('slideToast', 0,'Situação que será notificada', 'situacaoNotificada');
      return;
    }
    if (this.descricaoSituacao == ''){
      this.events.publish('slideToast', 0,'Descrever a situação', 'descrevaSituacao');
      return;
    }
    this.events.publish('set-descricao-do-caso', {
      'situacaoNotificadaChecked': this.situacaoNotificadaChecked,
      'casosSuspeitosEConfirmados': this.casosSuspeitosEConfirmados,
      'principalSuspeita': this.principalSuspeita,
      'descricaoSituacao': this.descricaoSituacao
    });
  }

  focusItem(item){
    this.events.publish('scrollToItem', item);
  }

}
