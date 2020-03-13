import { Events } from 'ionic-angular';
import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { Globals } from './globals';
import { RegistrosProvider } from './registros';
import { UbsProvider } from './ubs.provider';
// declare var Parse: any;
//import * as _ from 'underscore';
@Injectable()
export class SaudeProvider {


  constructor(private globals: Globals,
              private registros: RegistrosProvider,
              private events: Events,
              private ubsProvider: UbsProvider) {
    this.init();
  }

  init() {
    Parse.initialize(this.globals.parseAppId, this.globals.parseJsId, this.globals.masterKey);
    Parse.serverURL = this.globals.serverURL;
  }

  getLocations(location){
    let  message1 = {};
    message1["geoPoint"] = {

      ["latitude"]:location.latitude,
      ["longitude"]: location.longitude
    };
    return new Promise((resolve, reject) => {
      this.ubsProvider.get(location.latitude, location.longitude).subscribe((ubs) => {
        resolve(JSON.parse(JSON.stringify(ubs)));
      });
      // Parse.Cloud.run('listapontos',message1).then((pontos)=> {
      //     resolve(JSON.parse(JSON.stringify(pontos)));
      //   });
    });
  }

  getUsers(): Promise<any> {
    return new Promise((resolve, reject) => {
      Parse.Cloud.run('getUsers').then((users)=> {
        resolve(JSON.parse(JSON.stringify(users)));
      });
    });
  }

  getUserById(user): Promise<any> {
    return new Promise((resolve, reject) => {
      Parse.Cloud.run('getUserById', user).then((users)=> {
        resolve(JSON.parse(JSON.stringify(users)));
      });
    });
  }

  createPonto(ponto): Promise<any> {
    return new Promise((resolve, reject) => {

      let Saude = Parse.Object.extend("saude");
      let saude = new Saude();
      let date = new Date();


      let point = new Parse.GeoPoint({latitude: ponto.latitude, longitude: ponto.longitude});
      saude.set("localizacao", point);
      saude.set("data", date);
      saude.set("sintomas", ponto.sintomas);
      saude.set("estou_bem", ponto.estou_bem);
      saude.set("device", ponto.device);
      saude.set("cpfUsuarioLogado", ponto.cpfUsuarioLogado);
      saude.set("paises", ponto.paises);
      saude.set("foraPais", ponto.foraPais);
      saude.set("contatoConfirmado", ponto.contatoConfirmado);
      saude.set("contatoSuspeito", ponto.contatoSuspeito);

      saude.save().then(
        function(object) {
          resolve(object)
        },
        function(error) {
          reject(error)
        });
    });
  }

  async createRegistro(registro): Promise<any> {
    await this.registros.getCPF().then(cpf => {
      if (cpf != 'err'){
        return new Promise((resolve, reject) => {

          let Registros = Parse.Object.extend("registros");
          let registros = new Registros();

          let Sintomas = Parse.Object.extend("saude");
          let Membros  = Parse.Object.extend("membros");
          let pointerSintomas = new Sintomas();
          let pointerMembros = new Membros();
          pointerMembros.id = registro.membros.objectId;

          if (registro.sintomas) {
            pointerSintomas.id = registro.sintomas.id;
            registros.set("sintomas", pointerSintomas);
          }

          registros.set("cpfUsuarioLogado", cpf);
          registros.set("membros", pointerMembros);
          registros.set("temperatura", registro.temperatura);
          registros.set("duracao", registro.duracao);
          registros.set("medicacao", registro.medicacao);
          registros.set("dataInicio", registro.dataInicio);
          registros.set("dataFim", registro.dataFim);

          registros.save().then((object) => {
              this.getNovoRegistroParse(object.id);
              resolve(object)
            },
            (error) => {
              reject(error)
            });
        });
      }
    });
  }

  async getNovoRegistroParse(id){
    const registros = Parse.Object.extend("registros");
    const query = new Parse.Query(registros);
    query.equalTo("objectId", id);
    await query.find({
      success: (results) => {
        this.events.publish('update-registros',JSON.parse(JSON.stringify(results[0])));
      },
      error: (error) => {
        console.log('error', error);
      }
    });
  }

  updateUser(user): Promise<any> {
    return new Promise((resolve, reject) => {
      Parse.Cloud.run('updateUser', user).then((users)=> {
        resolve(JSON.parse(JSON.stringify(users)));
      });
    });
  }

  deleteUser(user): Promise<any> {
    return new Promise((resolve, reject) => {
      Parse.Cloud.run('deleteUser', user).then((users)=> {
        resolve(JSON.parse(JSON.stringify(users)));
      });
    });
  }
}

