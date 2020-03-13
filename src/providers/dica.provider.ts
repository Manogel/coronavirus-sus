import { Injectable } from '@angular/core';
import { Globals } from './globals';
import * as Parse from 'parse';

@Injectable()
export class DicaProvider {

  constructor(
    private globals: Globals
  ) {}

  init() {
    Parse.initialize(this.globals.parseAppId, this.globals.parseJsId, this.globals.masterKey);
    Parse.serverURL = this.globals.serverURL;
  }

  getDicas(): Promise<any> {
    return new Promise(async (resolve) => {
      const Classe = Parse.Object.extend('dicas');
      const query = new Parse.Query(Classe);
      query.limit(2000);
      query.descending('updatedAt');
      let dicas = await query.find();
      resolve(JSON.parse(JSON.stringify(dicas)));
    });
  }
}

