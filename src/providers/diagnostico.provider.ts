import { Injectable } from '@angular/core';

@Injectable()
export class DiagnosticoProvider {

  private _sintomas: any;

  public diagnostico(sintomas): Promise<any>{
    this._sintomas = this._getSintomas(sintomas);
    let mensagem = '';

    if ((this._temSintomaEspecifico('Febre') && this._temSintomaEspecifico('Dor de cabeça') && this._temSintomaEspecifico('Dor no corpo'))) {
      mensagem = this._sindromeHemorragicalcterica();

    } else if ((this._temSintomaEspecifico('Febre')) && (this._temSintomaEspecifico('Tosse') || this._temSintomaEspecifico('Dor de garganta'))) {
      mensagem = this._sindromeRespiratoria();

    } else if (this._temSintomaEspecifico('Febre') && this._temSintomaEspecifico('Manchas avermelhadas na pele')){
      mensagem = this._sindromeExantematica();

    } else if (this._temSintomaEspecifico('Diarreia com sangue ou muco') || this._temSintomaEspecifico('Diarreia sem sangue nem muco')){
      mensagem = this._sindromeDiarreica();
    }

    return new Promise((resolve, reject) => {
      resolve(mensagem);
    });
  }

  private _getSintomas(sintomas){
    let tempSint = [];
    sintomas.forEach(element => {
      tempSint.push(
        element.nome);
    });
    return tempSint;
  }

  private _temSintomaEspecifico(sintoma){
    return this._sintomas.some(value => {
      return value == sintoma;
    });
  }

  private _sindromeHemorragicalcterica(){
    let mensagem = 'Aumente a ingestão de líquidos orais  e procure uma unidade de saúde.';

    if (this._temSintomaEspecifico('Olhos avermelhados') || this._temSintomaEspecifico('Sangramento nasal') || this._temSintomaEspecifico('Pele amarelada') || this._temSintomaEspecifico('Sangramentos')){
      mensagem = 'Aumente a ingestão de líquidos orais, caso tenha tido contato com alagamentos, esgotos ou ratazanas, procure uma unidade de saúde para avaliação médica e informe.';

      if (this._temSintomaEspecifico('Falta de ar') || this._temSintomaEspecifico('Pressão baixa') || this._temSintomaEspecifico('Vômitos')) {
        mensagem = 'Procure urgente uma unidade de saúde para  atendimento médico e avaliação de seu estado de saúde. Caso tenha tido contato com alagamentos, esgotos ou ratazanas, informe o médico.';
      }
    }

    return mensagem;

  }

  private _sindromeRespiratoria(){
    let regra = [
      {p:1, des:'Febre'}, {p:1, des: 'Tosse'}, {p:1, des:'Dor de garganta'},
      {p:3, des: 'Dor de cabeça'}, {p:3, des:'Dor no corpo'}, {p:3, des:'Secreção no nariz'}, {p:3, des: 'Mal estar'},
      {p:12, des: 'Falta de ar'}, {p:12, des:'Cansaço'}
    ];

    let mensagem = '';

    let testeSintomas = this._testeSintomas(regra);

    if (testeSintomas >=1 && testeSintomas <= 3){
      mensagem = 'Aumente a ingestão de líquidos orais  e procure uma unidade de saúde.';
    } else if (testeSintomas >= 4 && testeSintomas <= 15) {
      mensagem = 'Aumente a ingestão de líquidos orais e procure uma unidade de saúde para avaliação médica.';
    } else if (testeSintomas > 12 && testeSintomas <= 39) {
      mensagem = 'Procure urgente uma unidade de saúde para atendimento médico e avaliação de seu estado de saúde.';
    }

    return mensagem;
    // Mensagens 1 dia após preenchimento dos sinais e sintomas
    // 3.4.1 | Mensagem para 3.3.1 = você procurou uma unidade de saúde? Não se esqueça de continuar ingerindo liquido |
    // 3.4.2 | Mensagem para 3.3.2 = você já procurou uma unidade de saúde? Não se esqueça de continuar ingerindo liquido |
    // 3.4.3 | Mensagem para 3.3.3 = você já procurou uma unidade de saúde? É muito importante que você procure por atendimento médico. |
  }

  private _sindromeExantematica(){
    let regra = [
      {p:1, des:'Febre'}, {p:1, des:'Manchas avermelhadas na pele'},
      {p:2, des: 'Coceira no corpo'}, {p:2, des: 'Irritação nos olhos'}, {p:2, des: 'Tosse'}, {p:2, des: 'Secreção no nariz'},
      {p:2, des: 'Nódulos no pescoço ou atrás das orelhas'}
    ];

    let mensagem = '';

    let testeSintomas = this._testeSintomas(regra);

    if (testeSintomas >= 4){
      mensagem = 'Evite permanecer em ambientes fechados e com aglomerado de pessoas. Procure o serviço de saúde mais próximo de sua residência.';
    }

    return mensagem;

    // Mensagens 1 dia após preenchimento dos sinais e sintomas |
    // 2.4.1 | Mensagem para 2.3.1 = Evite permanecer em ambientes fechados e com aglomerado de pessoas. Procure o serviço de saúde mais próximo de sua residência.

  }

  private _sindromeDiarreica(){
    let regra = [{p:1, des:'Diarreia sem sangue nem muco'}, {p:10, des:'Diarreia com sangue ou muco'},
                {p:1, des:'Febre'}, {p:1, des:'Vômitos'}, {p:1, des:'Náuseas (enjoo)'}, {p:1, des:'Dor na barriga (cólica intestinal)'}];
    let mensagem = '';
    let testeSintomas = this._testeSintomas(regra);

    if (testeSintomas > 1 && testeSintomas < 10){
      mensagem = 'Beba mais líquidos, como água, água de coco e chás após evacuar, para evitar a desidratação.  Não pare de comer e mantenha a sua alimentação habitual. Se houver piora da diarreia, sangue nas fezes, vômitos repetidos, muita sede, recusa de alimentos, diminuição do volume da urina ou piora no estado geral, procure o serviço de saúde para avaliação e tratamento adequado.';
    } else if (testeSintomas > 10){
      mensagem = 'Procure o serviço de saúde o quanto antes, para avaliação e tratamento adequado. Até o atendimento, beba mais líquidos, como água, água de coco e chás,  para evitar a desidratação, não pare de comer e mantenha a sua alimentação habitual.';
    }

    return mensagem;

    // 4.4 | Mensagens 1 dia após preenchimento dos sinais e sintomas |
    // 4.4.1 | Mensagem 4.3.3 = Continue monitorando os sinais e sintomas. Se houver piora da diarreia, sangue nas fezes, vômitos repetidos, muita sede, recusa de
    //                        alimentos, diminuição do volume da urina, ou piora no estado geral procure o serviço de saúde para avaliação e tratamento adequado.
  }

  private _testeSintomas (regra) {
    let pontos = 0;
    regra.forEach(value => {
      this._sintomas.forEach(sintoma => {
        if (sintoma == value.des) pontos = pontos + value.p
      });
    });
    return pontos
  }

}


