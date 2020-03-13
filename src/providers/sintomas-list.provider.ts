import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { Globals } from './globals';
import * as _ from 'underscore';
import { Events } from 'ionic-angular';

@Injectable()
export class SintomasListProvider {

  private _sintomasList: Array<any> = [];

  constructor(
    private globals: Globals,
    private events: Events
  ){
    this.init();
  }

  init(){
    Parse.initialize(this.globals.parseAppId, this.globals.parseJsId, this.globals.masterKey);
    Parse.serverURL = this.globals.serverURL;

    this._setSintomas();
  }

  private async _setSintomas(arr?){
    await this.getSintomas().then( sintomas => {
      this._sintomasList = [];
      _.each(sintomas, (sintoma: any) => {
        if (sintoma) {
          this._sintomasList.push({
            'id': sintoma.objectId,
            'nome': sintoma.nome,
            'isSelected': false
          });
        }
      });
      if (arr) this.events.publish('get-sintomas-list', this._sintomasList);
      else this.events.publish('update-sintomas-list', this._sintomasList);
    });
  }

  sintomas(arr?){
    this._setSintomas(arr);
    // return this._sintomasList;
  }

  getSintomas(): Promise<any>{
    return new Promise(async (resolve) => {
      const Classe = Parse.Object.extend('sintomas');
      const query = new Parse.Query(Classe);
      query.limit(2000);
      query.ascending('nome');
      let sintomas = await query.find();
      resolve(JSON.parse(JSON.stringify(sintomas)));
    });
  }

  seleciona(sintoma){
    sintoma.isSelected = !sintoma.isSelected;
  }
}
