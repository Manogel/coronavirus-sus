import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';
import { AbstractProvider } from './abstract.provider';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { catchError, map, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { IonicUtilProvider } from './ionic-util';
import { ToastController } from 'ionic-angular';

declare var process: {env: {[key: string]: string | undefined}};

const URL_BC = process.env['URL_BC'];
const CLIENT_ID_BC = process.env['CLIENT_ID_BC'];
const URL_BC_TOKEN = process.env['URL_BC_TOKEN'];
const SECRET_BC = process.env['SECRET_BC'];
const URL_BASE = process.env['URL_BASE'];
const TOKEN_MOSQUITO = process.env['TOKEN_MOSQUITO'];
const URL_MOSQUITO = process.env['URL_MOSQUITO'];

@Injectable()
export class LoginProvider {

  private usuario: Usuario;

  constructor(
    private http: HTTP,
    private storage: Storage,
    private abstractProvider: AbstractProvider,
    private util: IonicUtilProvider,
    private toastCtrl: ToastController
  ){
    this.usuario = new Usuario();
  }

  login(documento: string, senha: string) {
    return new Promise((resolve, reject) => {
      this.http.setHeader(URL_BASE, 'Content-Type', 'application/json');
      this.http.setDataSerializer('json');
      let url = URL_BASE + 'cartaosus/rest/user/login?documento=' + documento.replace(/\D/g, '') + '&senha=' + senha;
      this.http.setSSLCertMode('nocheck').then(() => {
        setTimeout(() => {
          this.http.get(url, null, this.http.getHeaders(URL_BASE)).then(() => {
            this.http.get( URL_BASE +'cartaosus/rest/user', null, null).then((response) => {
              resolve(JSON.parse(response.data));
            }, (response) => {
              let error = response.error;
              if(error.indexOf('faultInfo') >= 0) {
                error = JSON.parse(response.error);
                reject(error.faultInfo.messagesErrors[0].detail);
              } else {
                console.log('error', response);
                error = 'Não foi possível realizar o login, tente novamente.';
              }
              reject(error);
            });
          }, (response) => {
            let error = response.error;
            if(error.indexOf('faultInfo') >= 0) {
              error = JSON.parse(response.error);
              reject(error.faultInfo.messagesErrors[0].detail);
            } else {
              console.log('error', response);
              error = 'Não foi possível realizar o login, tente novamente.';
            }
            reject(error);
          });
        }, 2000);
      });
    });
  }

  recuperarPergunta(documento: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`cartaosus/rest/primeiroacesso/v2/perguntas?documento=${documento.replace(/\D/g, '')}`, null, this.abstractProvider.montarHeadersBC()).then((perguntas) => {
        resolve(perguntas);
      }, (error) => {
        reject(error);
      });
    });
  }

  confirmarPergunta(pergunta: any) {
    let error = { erro: 'Resposta incorreta!!' };
    return new Promise((resolve, reject) => {
      this.http.post(`cartaosus/rest/primeiroacesso/v2/validarResposta`, pergunta, this.abstractProvider.montarHeadersBC()).then((response: any) => {
        if (response && response.respostaValida === 'true') {
          resolve(response);
        } else {
          reject(error);
        }
      }, (error) => {
        reject(error);
      });
    });
  }

  confirmarEmail(email: string, usuario) {
    let emailobj = {
      "cns": usuario.documento,
      "email": email
    };

    return new Promise((resolve, reject) => {
      this.http.post(`cartaosus/rest/primeiroacesso/v2/informarEmail`, emailobj, this.abstractProvider.montarHeadersBC()).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

  recuperarCaptcha() {
    return new Promise((resolve, reject) => {

      let url = URL_BC +`ecidadao/cadastro/captcha/imagem/clientId/` + CLIENT_ID_BC;
      console.log('url', JSON.stringify(url));
      this.http.get( url, null, this.http.getHeaders(URL_BC)).then((response) => {
        resolve(JSON.parse(response.data));
      }, (error) => {
        reject(error);
      });
    });
  }

  iniciacaoBC(cpf, captcha, token) {
    return new Promise((resolve, reject) => {
      this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
      let url = URL_BC + 'ecidadao/cadastro/inicializacao/' + cpf + '/clientId/' + process.env['CLIENT_ID_BC'] + '/captcha/' + captcha + '/tokenCaptcha/' + token;
      console.log('url', JSON.stringify(url));
      this.http.post(url, {}, this.http.getHeaders(URL_BC)).then((response) => {
        resolve(JSON.parse(response.data));
      }, (response) => {
        console.log('error', response);
        reject(JSON.parse(response.error));
      });
    });
  }

  inicializacaoKbaRFB(cpf, token) {
    return new Promise((resolve, reject) => {
      this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
      this.http.setHeader(URL_BC ,'Authorization', token);
      let url = URL_BC +'ecidadao/cadastro/inicializacaoKbaRFB/' + cpf  + '/token/' + token;
      console.log('url', JSON.stringify(url));
      this.http.put( url, {}, this.http.getHeaders(URL_BC)).then((response) => {
        resolve(JSON.parse(response.data));
      }, (response) => {
        console.log('error', response);
        reject(JSON.parse(response.error));
      });
    });
  }

  informacoesBasicasBC(cpf, token, obj) {
    return new Promise((resolve, reject) => {
      this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
      this.http.setHeader(URL_BC, 'Authorization', token);
      this.http.setHeader(URL_BC, 'Cache-Control', 'no-cache');
      this.http.setDataSerializer('json');
      let url = URL_BC + 'ecidadao/cadastro/informacoesBasicas/' + cpf + '/token/' + token;
      this.http.put(url, obj, this.http.getHeaders(URL_BC)).then(() => {
        resolve();
      }, (response) => {
        console.log('error', response);
        reject(JSON.parse(response.error));
      });
    });
  }

  finalizacaoKbaRFB(cpf, token, respostas) {
    return new Promise((resolve, reject) => {
      this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
      this.http.setHeader(URL_BC, 'Authorization', token);
      this.http.setHeader(URL_BC, 'Cache-Control', 'no-cache');
      this.http.setDataSerializer('json');
      let url = URL_BC + 'ecidadao/cadastro/finalizacaoKbaRFB/'+ cpf + '/token/' + token;
      this.http.put(url, respostas, this.http.getHeaders(URL_BC)).then((response) => {
        resolve(JSON.parse(response.data));
      }, (response) => {
        reject(JSON.parse(response.error));
      });
    });
  }

  confirmacaoIdentidade(cpf, token, pin) {
    return new Promise((resolve, reject) => {
      this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
      this.http.setHeader(URL_BC, 'Authorization', token);
      this.http.setHeader(URL_BC, 'Cache-Control', 'no-cache');
      this.http.setDataSerializer('json');
      this.http.put(URL_BC + 'ecidadao/cadastro/confirmacaoIdentidade/' + cpf + '/token/' + token + '/pin/' + pin, {}, this.http.getHeaders(URL_BC)).then(() => {
        resolve();
      }, (response) => {
        console.log('error', response.error);
        reject(JSON.parse(response.error));
      });
    });
  }

  finalizacao(cpf, token, obj) {
    return new Promise((resolve, reject) => {
      this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
      this.http.setHeader(URL_BC, 'Authorization', token);
      this.http.setHeader(URL_BC, 'Cache-Control', 'no-cache');
      this.http.post(URL_BC + 'ecidadao/cadastro/finalizacao/' + cpf + '/token/' + token, obj, this.http.getHeaders(URL_BC)).then(() => {
        resolve();
      }, (response) => {
        console.log('error', response);
        reject(JSON.parse(response.error));
      });
    });
  }

  recuperarTokenBC(code) {
    return new Promise((resolve, reject) => {
      this.http.removeCookies(URL_BASE, () => {
        let aut = btoa(CLIENT_ID_BC + ':' + SECRET_BC);
        this.http.setHeader(URL_BC_TOKEN, 'Content-Type', 'application/x-www-form-urlencoded');
        this.http.setHeader(URL_BC_TOKEN, 'Authorization', 'Basic ' + aut);
        this.http.setDataSerializer('urlencoded');
        let url = encodeURI(URL_BC_TOKEN + 'scp/token?grant_type=authorization_code&code=' + code + '&redirect_uri=https://diariosaude.saude/login');
        this.http.post(url, {}, this.http.getHeaders(URL_BC_TOKEN)).then((response) => {
          console.log('response recupera token bc', response);
          resolve(JSON.parse(response.data));
        }, (response) => {
          console.log('erro', response);
          reject(JSON.parse(response.error));
        });
      });
    });
  }

  getUser(token) {
    return new Promise((resolve, reject) => {
      this.http.setHeader(URL_BASE, 'Authorization', token);
      this.http.get(URL_BASE + 'cartaosus/rest/user',{withCredentials: 'true'}, this.http.getHeaders(URL_BASE)).then((response) => {
        console.log('response get user', JSON.parse(response.data));
        let usuario = JSON.parse(response.data);
        if(usuario[0]){
          resolve(usuario[0]);
        }else{
          resolve(null);
        }
      }, (response) => {
        let error = JSON.parse(response.error).localizedMessage;
        console.log('error get user', response);
        if (error === 'Não foi possível recuperar os dados.') {
          error = 'Não foi possível realizar o login, tente novamente mais tarde.';
        }
        reject(error);
      });
    });
  }

  getUserInfo(token){
    return new Promise((resolve, reject) => {
      this.http.setHeader(URL_BC, 'Content-Type', 'application/json;charset=utf-8');
      this.http.setDataSerializer('json');
      this.http.get( URL_BC +'ecidadao/usuario/getUserInfo/brasil_cidadao?access_token=' + token,null, this.http.getHeaders(URL_BC)).then((response) => {
        console.log('response get user info', response);
        this.storage.set('usuario', JSON.parse(response.data));
        resolve(JSON.parse(response.data));
      }, (response) => {
        console.log('error get user info', response);
        try {
          let error = JSON.parse(response.error);
          reject(error);
        } catch(e) {
          reject('Não foi possível realizar o login, tente novamente.');
        }
      });
    });
  }

  iniciacaoRSBC(cpf, captcha, token) {
    return new Promise((resolve, reject) => {
      this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
      let url = URL_BC + 'ecidadao/recuperarSenha/inicializacao/'+ cpf + '/clientId/' + CLIENT_ID_BC + '/captcha/' + captcha + '/tokenCaptcha/' + token;
      this.http.post(url, {}, this.http.getHeaders(URL_BC)).then((response) => {
        resolve(JSON.parse(response.data));
      }, (response) => {
        reject(JSON.parse(response.error));
      });

    });
  }

  confirmacaoRSIdentidade(cpf, token, pin) {
    return new Promise((resolve, reject) => {
      this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
      this.http.setHeader(URL_BC, 'Authorization', token);
      this.http.setHeader(URL_BC, 'Cache-Control', 'no-cache');
      this.http.setDataSerializer('json');
      this.http.put(URL_BC + 'ecidadao/recuperarSenha/confirmacaoIdentidade/' + cpf + '/token/' + token + '/pin/' + pin, {}, this.http.getHeaders(URL_BC)).then((response) => {
        console.log('response confirma pin rs', response);
        resolve(response.data);
      }, (response) => {
        console.log('error', response);
        reject(JSON.parse(response.error));
      });
    });
  }

  finalizacaoRS(cpf, token, obj) {
    return new Promise((resolve, reject) => {
      this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
      this.http.setHeader(URL_BC, 'Authorization', token);
      this.http.setHeader(URL_BC, 'Cache-Control', 'no-cache');
      console.log(URL_BC + 'ecidadao/recuperarSenha/finalizacao/' + cpf + '/token/' + token);
      this.http.put(URL_BC + 'ecidadao/recuperarSenha/finalizacao/' + cpf + '/token/' + token, obj, this.http.getHeaders(URL_BC)).then(() => {
        resolve();
      }, (response) => {
        console.log('error', response);
        reject(response.error);
      });
    });
  }

  recuperarSenha(params: any) {
    return new Promise((resolve, reject) => {
      console.log('parametros', params);
      console.log('url ', URL_BASE + 'cartaosus/rest/user/recuperarSenha');
      this.http.setHeader(URL_BASE, 'Content-Type', 'application/json');
      this.http.setDataSerializer('json');
      this.http.post(URL_BASE + 'cartaosus/rest/user/recuperarSenha', params, this.http.getHeaders(URL_BASE)).then(() => {
        resolve()
      }, (response) => {
        reject(response.error ? JSON.parse(response.error).faultInfo.messagesErrors[0].detail : response);
      })
    });
  }

  profissionalSaude( documento: string): Observable<any>{
    this.http.setHeader(URL_MOSQUITO,'Authorization', 'Basic ' + TOKEN_MOSQUITO);
    return from(this.http.get(URL_MOSQUITO + documento, null, this.http.getHeaders(URL_MOSQUITO))).pipe(
      retry(3),
      map((response) => {
        return JSON.parse(response.data);
      }),
      catchError((error) => {
        if(error.status === 500) {
          return of(null);
        } else {
          Observable.throw(() => {
            this.util.endLoading();
            this.toastCtrl.create({
              message: 'Não foi possível realizar o login, tente novamente.',
              position: 'top',
              duration: 2500
            }).present();
          })
        }
      })
    );
  }

  logout() {
    return new Promise((resolve) => {
      this.http.get(URL_BASE + 'cartaosus/rest/user/logout', null, null).then((response) => {
        this.http.removeCookies(URL_BASE, () => {
          console.log('resultado do logout', response);
          this.storage.remove('usuario');
          this.storage.remove('token_bc');
          this.storage.remove('usuario-profissional-saude');
          this.storage.remove('profissional-saude');
          this.usuario.set(null);
          resolve();
        });
      }, (error) => {
        this.http.removeCookies(URL_BASE, () => {
          this.storage.remove('usuario');
          this.storage.remove('token_bc');
          this.storage.remove('usuario-profissional-saude');
          this.storage.remove('profissional-saude');
          this.usuario.set(null);
          resolve();
        });
      });
    });
  }
}
