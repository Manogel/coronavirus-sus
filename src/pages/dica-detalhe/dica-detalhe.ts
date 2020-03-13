import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-dica-detalhe',
  templateUrl: 'dica-detalhe.html'
})

export class DicaDetalhePage {
// ``,
//   <a href="#">dfsf</a> ,

  detalhe: any = [
    {
      titulo: 'Viagens para áreas com recomendação de vacinação contra febre amarela no Brasil:',
      texto: 'A vacina febre amarela é indicada para residentes e/ou viajantes que se destinam às Áreas com Recomendação de Vacinação (ACRV), com pelo menos 10 dias de antecedência da data da viagem, tempo necessário para que a vacina confira proteção contra a infecção. Confira aqui a Lista dos municípios com recomendação para vacinação contra febre amarela no Brasil.',
    },
    {
      titulo: 'Estrangeiros que irão visitar o Brasil:',
      texto: 'No Brasil não há obrigatoriedade de comprovação vacinal para entrada no país, no entanto, o Ministério da Saúde do Brasil recomenda que os turistas internacionais atualizem a sua situação vacinal previamente à chegada ao Brasil, conforme as orientações do calendário de vacinação do país de origem ou residência.',
    }
  ];

  dica: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.dica = this.navParams.get('dica');
  }

  getClassColor (dica) {
    return 'lb-color-' + dica.titulo;
  }

  openWeb(){
    if (this.dica.link){
      window.open(this.dica.link, '_blank', 'location=yes');
    }
  }
}
