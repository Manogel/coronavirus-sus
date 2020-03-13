import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

@Injectable()
export class RegistrosProvider {

  cpf: any;

  constructor(
    private storage: Storage,
    private platform: Platform
  ) {}

  async getRegistros(membro): Promise<any>{

    await this.getCPF().then(r => {
      if (r != 'err'){
        this.cpf = r;
      }
    });

    return new Promise(async (resolve, reject) => {
      let query = new Parse.Query("saude");
      query.descending("createdAt");
      query.equalTo("cpfUsuarioLogado", this.cpf);
      query.limit(1000);
      await query.find({
          success: function(results) {
            resolve(JSON.parse(JSON.stringify(results)));
          },
          error: function(error) {
            console.log('error', error);
          }
      });

    });
  }

  getCPF(): Promise <any>{
    return new Promise((resolve) => {
      this.storage.get('usuario').then((usuario) => {
        if(usuario) {
          if (usuario['cpf'] && usuario['cpf'] != ""){
            resolve(usuario['cpf']);
          } else if (usuario['cnsLogin'] && usuario['cnsLogin'] != ""){
            resolve(usuario['cnsLogin']);
          } else if (usuario['cns'] && usuario['cns'] != "") {
            resolve( usuario[ 'cns' ] );
          }
        } else {
          if(!this.platform.is('cordova')) {
            resolve('02687278130')
          }
            resolve('');
        }
      });
    });
  }

  loadMembros(cpf): Promise<any>{
    return new Promise(async (resolve) => {
      let query = new Parse.Query("membros");
        query.descending("createdAt");
        query.equalTo("cpfUsuarioLogado", cpf);
        await query.find({
          success: (results) => {
            resolve(JSON.parse(JSON.stringify(results)));
          },
          error: (error) => {
            console.log('error', error);
            resolve('err');
          }
        });
    });
  }


  loadRegistrosMembros(cpf): Promise<any>{

    return new Promise(async (resolve) => {
      let query = new Parse.Query('registros');
      query.descending("createdAt");
      query.equalTo("cpfUsuarioLogado", cpf);
      query.include("sintomas");

      await query.find({
        success: (results) => {
          resolve(JSON.parse(JSON.stringify(results)));
        },
        error: (error) => {
          console.log('error', error);
        }
      });
    });
  }

}
