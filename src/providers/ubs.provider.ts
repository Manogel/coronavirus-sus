import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UbsProvider {

  constructor(private http: HttpClient) {}

  get(lat: any, long: any) {
    let url = 'https://cartaosusdigital.saude.gov.br/cartaosus/rest/estabelecimento/ubs';
    url = url + '?latitude=' + lat + '&longitude=' + long + '&&registroInicial=1&quantidadeRegistros=100';
    return this.http.get(url);
  }
}
