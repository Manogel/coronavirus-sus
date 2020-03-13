import { Component, ViewChild } from '@angular/core';
import { Events, Content } from 'ionic-angular';

@Component({
  selector: 'localizacao',
  templateUrl: 'localizacao.html'
})
export class LocalizacaoComponent {

  @ViewChild(Content) content: Content;

  localOcorrencia = '' ;
  estadoDaOcorrencia: any;
  municipioDaOcorrencia = '';
  estados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

  constructor(private events: Events) {}


  ngOnInit() {
    this.events.subscribe('get-localizacao', (dados: any) => {
      if(dados && dados.localizacao) {
        this.localOcorrencia = dados.localizacao.localOcorrencia;
        this.estadoDaOcorrencia = dados.localizacao.estadoDaOcorrencia;
        this.municipioDaOcorrencia = dados.localizacao.municipioDaOcorrencia;
      } else this._getDados();
    });
  }

  ngOnDestroy() {
    this.events.unsubscribe('get-localizacao');
  }

  private _getDados(){
    if (this.localOcorrencia == ''){
      this.events.publish('slideToast', 1,'Local de ocorrência', 'content-notificacao');
      return;
    }
    if (this.estadoDaOcorrencia == 'Selecione' || typeof this.estadoDaOcorrencia == 'undefined'){
      this.events.publish('slideToast', 1,'Estado', 'content-notificacao');
      return;
    }
    if (this.municipioDaOcorrencia == ''){
      this.events.publish('slideToast', 1,'Município', 'content-notificacao');
      return;
    }
    this.events.publish('set-localizacao', {
      'localOcorrencia': this.localOcorrencia,
      'estadoDaOcorrencia': this.estadoDaOcorrencia,
      'municipioDaOcorrencia': this.municipioDaOcorrencia
    });
  }

  focusItem(item){
    this.events.publish('scrollToItem', item);
  }

}
