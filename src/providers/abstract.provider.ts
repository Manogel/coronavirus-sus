import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AbstractProvider {

  constructor(
    private storage: Storage
  ) {}

  montarHeadersBC() {
    let headers = '';
    if(this.storage.get('token_bc')) {
      headers = 'Authorization: ' + this.storage.get('token_bc');
    }
    return headers;
  }
}
