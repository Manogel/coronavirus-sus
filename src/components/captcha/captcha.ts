import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { IonicUtilProvider } from '../../providers/ionic-util';
import { Captcha } from '../../models/Captcha';
import { Iniciacao } from '../../models/Iniciacao';
import { LoginProvider } from '../../providers/login.provider';
import { Util } from '../../util/util';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'captcha-component',
  templateUrl: 'captcha.html',
})
export class CaptchaComponent implements OnInit {

  public cpf: string;
  private campoValido: boolean = false;
  public captcha: Captcha = new Captcha();
  private iniciacao: Iniciacao;
  public textoCaptcha: string;
  private retornoCaptcha: any;
  @Output() respostaCaptcha = new EventEmitter();
  @Input() step: number;
  @Input() events: Observable<string>;
  @Input() recuperarSenha: boolean = false;

  constructor(
    private util: IonicUtilProvider,
    private platform: Platform,
    private loginProvider: LoginProvider,
    private toastCtrl: ToastController,
    private storage: Storage
  ) {}

  ngOnInit() {
    if(this.events) {
      this.events.subscribe((source) => {
        if(source == 'captcha') {
          this.continuar();
        }
      });
    }
    this.getCaptcha()
  }

  public getCaptcha() {
    this.textoCaptcha = '';
    this.util.onLoading('Carregando Captcha...');
    if ( !this.platform.is( 'cordova' ) ) {
      this.retornoCaptcha = {
        "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyCAYAAAD1JPH3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABaPSURBVHhe7Z1XqCXF9sYP5qyYZ8w5oBgQA+aAihl1MGdFRTFjwPRXx4R/1Bfxjl5xDOAgOl4QFVHwGmBQH0bxQX1yfJp5k/vkY9/9K87Xd511VlVX995nGC/3g8U+3V1dtWqtr1atqu69z9RWW221fGpqqinJvHnzVs2fP3/lHnvsseK0005btmDBgn8iTz755JJFixYtRn766af/b5rm/8aVP/74Y+Hvv//+THTNytKlS//21ltv/T269leRmj5gW2wSXesjc20rfFbjt5LU9rVUbmqzzTb7V0TiceTggw9uTjjhhCSPPvpoknfeeaf54osvmt9++23Ubgyuv/vuu6l8CZ988knb1uuvvz59dnIYGatZuXLl9NHcoKYPnOf6008/PX2mDuiPCNi1y1bLli2b/msYli9f3rz66qvNn3/+mY75XLFiRWobXfD7zz//nK5FsH31ulAH8sEHHzT33XdfKnfuuec2n3322XSJ/2AKplPJFltskQqut956zZVXXtnceOONzUknnZTIudFGG6Vrk5R99903Ef7+++9vXnjhhVbR448/Pv1dAsbiHvT2jpNBLThny3UB43YNKgvqluOk26efflpsM9cHC86jhw0CuT4CyjMQIRciEEywLe1FoE6ulwjfBRESfdED8sEhjt988810DeF8BO657LLLmgsuuCCVgx+6xwplTj311PbY6zw1EkJ1Gj2QVwUjh2IkOv/cc881o9Sj2X///Ztjjjmm2WCDDdr7xhUG1H777dfccccdaWChB+SwTkQPP4rtCPfAiFF/BBFBgEBRxIraBZynfq499dRTSY+TTz55BqlqUSKsJY0GkAXXo35SX2ngdBFesH2nTnSQHghtf/TRR6nfVhfsT/3Iyy+/nM5ZUFYBtSRHHnlkc+GFF7akR7zOLaEBSl588cVtYRqqhZ1Czz777Oaee+5pDjjggGbTTTdtz48ra621VjPK+dvjww47LBH/m2++aX799ddkwCilyTla6LoOatMcObaUWuVAvdQfDUpgScOnH1y5gdiFLsJD0JdeemlG3wmA6IBEA1czhcB9kHnVqlWzBuOuu+7a2na77bZrjj766FQv5Xzd9PHLL79snnjiiVTG6zyD0MLVV1+dKt9+++2TAopeNOCjpcA5O4XSYaYc5LHHHmueffbZdK/Iw8Ah5dhmm23azowra6+9drPJJps0O+20UzISM86ZZ57Z3H333e30Z0URhgiFw3Qc5Xq+f+OAuqI6OIdeOI0y0seWFWE5N26eTx2+fg87kJGuKN4FCEof1Q/6efrpp89og3SDdrjWFyGhqQgyU/kll1ySFFD0QHIRxCLnEIGO2WjCMWXpCO3RSQg/yXRmLgQ7aQHMlHj44Yenv4877rg0oBDSMpVBmLk4Tz9zcsstt6T1BKLBeNVVV6U2WRAhXOM8aw6u8SmbSxisb7zxxqzzCIs47rOD2QtBCF2uvfbaVPbDDz8My40j9CHKmW+99dbiYGPg++CTFoXcJBEgLZXiJIjHNQx2++23p4qiygDnv/vuu+brr79uneOnDU1fiKawLqCDOo+IQKrnf/LfJ9tuu23inOWlAKdUzi40p9hLFuks8ch3KAxxPHKV2fMXXXTR9NmZsFMYCT4jfsjUYvHtt982DzzwQFsv0ZH82i5yxxHSGCLIbrvt1hx00EFpwcei+P3332+jDDmdypPmaODhECINaQ/HrNJVjiircl5I+2xUR+jX/PnzZ0X8nDATqK01TUgJ0RE/7bzzzs2BBx6YjklFH3zwweaRRx5pXnzxxcQj7OGRW2hOjQz9j+gGKqcwDXjkKrPn77333umzMwF5lYsqUtP+0HzQ53iIX0lTN6Tz+fukFqwMHOqDoOedd16aphUcaFPEBbb/PvKgY2lwc532amc1oD5DEj6/+uqr9MlMaoEu0fkIOf+XUKpfOgoKDqSdrL/sNQvuo33qVmCZ4gmfjcxAhkP4O4Iq8w7InY+Aca+44orm8ccfzyrdBT9AorbpQ0kfm86wLw45J5XOsOglUipqYx/a8gOY85QvrU9ee+21VIb+1gBHqx27XhkH2JF6+/i5C5BcaS1y0003pX4yg7N75fnpYXdc2kWhnE6FWhDi2LmCjax33nlnL4N3EdSihig5YEhSIgj08MMPp0URKQf1bbjhhq3+48jWW2+dUoibb745LfIWL16c7d8rr7yS0h181AV0f+ihh5KTqY+2sMUQQDitl4jO1NkHtf5CZ4QnjGxGkK71HYiJ0HI6ivKwhL8h9TjbQhCBqTdnfDqYm3otNHKFLoJS1urNMf3KTaVy9poqzBTHHnts6gODilkoWoxb2GDBPr0enLDOyCFHOgimuiAz9u9D6HECShfwLREc3cWRRGg5/ZRTTmmVZ994KNQJookdYXakW9C+VUqg/A477JDq0vYYo5acdOnSpdOlZiIyeK5dwDX1+a8mWlgxRdNnCCc7EiyYsrEXi2bdQxkLylOGa5Z01EFg8Pky5yA5YAB4n3lwHd1yAaULtGU5RJvojDC42dJEf/6mrRkphxSX8kMRdcKPdAuuUR7FpTB7pFafnLAgY5HH/UQmtgutAUrtgjWF0JCTQbvjjjtWPQauEaI7YgOV3qGx5RDK8UqDAseJJ56YUiBsSuri82VeDHr77beT3ecKdqYhUAGbL/PEFF9b/rSEZnRyI1soUh5iQi4+Kcx5VVYr1EsddlurNFikMNs1Kt9XeBiDU5hueSCg81G79NPeK2EbiZyZ6Rr9rZQIx0MIXx5h8RuV75L1118/kf3yyy9vd2e0xpmUYK/zzz+/jdQ5od+0ryd7RxxxRLKRJXpfKIAh8MyCazVpqUVLaG5ESTqnCCfmswVnOzaObL755mkLSSkAiuaU1bbepGSXXXZJzqBPEJX+gagsjsshtwNy1llnZftCm9E9tYLd/LSN/qSGpHZE9ui+1SUKIpotFQisPfjbr8tsxKU/JYJ3IQWn0WciNAd25ON4lAIQnChhOzAJgRikAXSEDqCDRS4dWGedddKWH/cweskhMWZUtkuYyqKIS4TOGTTXFlN0DlpXRMIuR3RewhMzPajCRvgF4gxJTdZdd93w/FwLiNY3FvSNx/REfXY5yP37gMHREhoweryzMBpPrZiuIZ6mGyvs3UIum1YsWLAg7XLQAR42HHrooYmI9j6E+rXvaBclAH18eYRoFAFHc13vPuD0rqeF5GlRxGUAK4J70B9fHjnkkEOmS8yGzQe90G8kukbk45VUnjDih4jE+AwSDN1K3GeffZK99txzz/D6uMIrwYAApdnfA/788MMPSQ8W/dzn+VCDGYQWiJqQAWN65XijzZ8jNRAYhbzHzHkUYiDwN/kZ73hEBCNPxCF2StX0FEVDCBWBEU6b3ItgnK4oBmntSl5CChYBw9sXzK3wGLeE3OBS+pWL4rw2a4/xC+RGb81q1IGNu6J9TjT1R9cIRgQJghn+4FWAqFxJSlC/RWDe8NT6JZol5d8IIaEFjMXTKTrCYtEraYUoB9EwCvegEA8JdJ2nZcqRrrnmmhn3IkyrNr/S9ATJmQGUDtGOz8MsaolMBKYNAeMxUzCQGYQiioUMT0Tz9SHnnHPOdMkYkIY2ILZyTj9wiORRIEGOOuqoZFsePETg3prUkPZpWyI75AjNII6ArbmGkMdH90qsrT3kMwU0DS4kmiU5l5s9i4QG3EjFTBU02DcC8L7ElltumaZM6uGlk6gcYjtdmp4gmwypkTqUyBGi+oHa4GWjqG4G/rigzb322iusH6Jfd911SQcLBniUCnrhPXFInwO+ju7TDBIhN4tKWMyyG/Ljjz9m6+E8sw1+of82mGBzBr3WSTb99Uj6jz5DQuecGinPt1NolG0yrg/dViL6EilpU6MVPWz7wI5gvWwzCSILXRFCO0Je6PtQQAyfm+densLOANswTeciugTbUM4SBftGBPPrCY49dC9+Yma15SXohJ14Y85Gb2Zq7IRQRzQQ4Q/3IiW/2tSzXaOM/g4JnXNqRGheo4xANOZpFat/XrccQvaNN944kZF7pQ+jmUfr5HWTJHItqC/XVl9AMrYxWUeoHhaX7GdDHOq0bUiIVLkvklohDeLxsIWNxNjSA3JgZwilwCLYe3OCj5ldu8p2DcQaIQAC7EhgDQmdG70gIjTE8pDTleh78Fqgr4d3fWucVCs4kyiS68tQaDfFSx9CoxOR1g5I+g6ZsB2EAsxOXTs1kfASldITG5BwfO1Drgi5wSyBH5pRczPZEJk3b14KjKyn7HkGj9rjcxahlyxZ0haORm9E6Gee4fdFZoLKMaYd4XagRE7yhoeMRP/bbrstreCZrqKtvz6iR78IxkFHBEfRnkRGisD1qG4kAttRbL3xaJlFp5+l+JkIZjCB9MPaAl14QcnekxPWKywcc9DMy9YYM4NNQwTajtYv9Ls0w1KvBf6+6667UlqRS03gAfXCNWalKGozG/3yyy+tTj7o4TuQBtvosyV0m4dMSzR6I0IjqjQHO/34UYbQsQgaGF2pBe8d4yR2VzjG8LndiKFCPkn/2caKriMaLD4XjQTHYGN2LSyBI0C8Up2kLCzYIWlXXSVYDuBTkQgf2Pas4BtIaWH9DVmZqe09CHZS4KAt2vD8irZofRlxjwE0g9AYjWmCvPf5558PR6+vDOHReCmiATrl75MwKjGkRS2RbY6MvrmX4PmxE2YSBhPRkO9GahErmUROVxJyY20L2pnLg35AEMTalUgV1YsNSvX1gTgAAVmnUH8pDWTvPdpGtf6mv/jI3ofw0pOgWQn72DIRof3iWf4HYQ7tgVElUaqgnQkrPCXkPQMiJulCblsJY/mIwnHfxR66kRvy3T2cYYkAOPbTpXYLckAPHhrhYAlfRrBvr3lhoFDO2qImAlsoLUDsfTlCMxjnAnyTKGpPwu+vMCPkgO0IjDwogQtRHdaHwPcxWpf4MqRz8ncVodPq0VQwCSEasrcYzQI+9fHCAoFRD1nUEZ77n3HGGWkh5MG0SXlfDzpE7YNoiqwVBo6N/Awc6TsOqCtqz+5/23UKiHJhC+znIyw2ueGGG8K2EIINQQwyMugicJ1nD6x/Pv/88zYV9MLgF9AVW9nrpHcentA8qNPAbwlNJ3xUE3wjQwVHM11gCPsDNh5cj+4vCQtGoj07LpoxAJ9c5zt9/h4EAkRO99PapESzQmRvdFFkRtDdRugcoXEwoKzOMeWr73x1i78R2qRtHRNFRUru5z1nnkiqHi/M0BowfvEqWD0Q/E7f7DmE/sgG0lXvcUjwqYcntN1lawmNAXKjDaAkkZP0AbGGRxiBTD86VkTiRX1+uskjN7ohF22R69LhUv5WI/qhydxDChnST304iyhFjujvGUdwLk6M7F1a9GGHXBp26aWXpvvttI79tb3IV6/kF2xrUxq9JN81KyIQKTejWehlMys8APPnNBCBdOUVXFtGKQd6K/D4AMvuiNASujR9WFAxIjDy9AOFfs/Zr5gtosiYIxfACVxHRzoE2dm3Vv1DhPtlSDv1CSKdyviX90UKxH4hYe+99047Doi+o4lwzAAHkb2x15CFKb/3x547f5N2US/EQ7SeQNBZn56YbCn6eiXoxACphY+gCG36c3bBJ139O/AEAHyjY9nNlkH4zZTUh1FdidC56aMEyqtCHApJLVASZaJFWoQSuSLYlTTRjY6K7IxsXcsJ5azTPWS8XBnO23OUx/GcZ1cF+/C3Vu4MCD4pF9lbAxxiqx9Dd17Yjya3ZtcHHWiLvrCzwHX6Y1GyF9fQBZ2oA+F+DWzE+j5HaH6I0Z6jXuxlAxu2sWWs8M147E370fX0/dNRHZ2LwhwsofqM4BxyxCkBA/C6am61jSMhCEbQCy6MenSOtoQsugY5/Y8WoYpG6AbUL7ulyDmRgf7qHtI533/04Dp1QBb6QNlaYbALIoQlIOcm+SuxkSSyBeclspXsEAn2BhGheaU3ZQSj670IjSOswVFEUWku4NOSCBHxRBJPDgG92WIbB5APY8oZgk1RbPt2wPqtOd3DHnlNnwGkpI9aSO2+++7p0wu5t589LWg/um91isjqCc2TYQKPDZiUoTyf3u9ZQmN09pLZXLfEoCKcsDqgznnCdAHnSc8cOShTSxx2ZPQ7dpag7Emjn0+RIC7bVXwxtqYNnMLCuc/sRDmV5ZNFOY+HAZ8MJha1+I8B3wVsBXGI/gi/o8c78JP6QR0vPMVlS47FvyUlfcHO2LDLR/5a4svoMyQ0jWAU/4IL5FpdhO6bUwP0lNE06kuQ8QDGjJzPopcXY7wdaIPpXMSyqB2MpYVzCejBzgH6ShcGxKTADKLf1Vafra7XX3996qOECIp9rPAvTVTeRtjaPovcJfuyiFSZxJfRteqUg5t4FZEXmGqj2ziwU3QtIHFkRA/qVMogImBcHCEQIXBsFCnee++9tp3IKbWDkT5SptRPzkeOlb6c5xM9I3C9Jkp7oBvtqm2O7UO2moCBjj4lrekzYCDRr4hrsi/6qAz19iI0DdhtFe9IESACjZWUnyQiI3rQFwjNDCQiWOJyveS4Lqdwve9gzCHn2GigRcAeLJotOfks2Qf4PB/UBoy5AHprYObsO4vQFLQd98g50hLAEx1gCAzzVwB959/LDXEcNonsVoMakg0BxGdWFTn1Ljo+7At8y73k23Ohawm07Tnkg+gsQnOR0Uz00qisgR25PGb2iJSpgVe4FuheE71wCgsnBCLKYTibv6NIL+JFbXAusht154IEsO3WIhoANfZCB3xB2b4Y514w1J+Ae629sbM4B//S8ej8rJRjaDTFKQsXLgwfdTNVRI4uwSq8aNGiakP0WWhRJwsfLX4ih1kniHj2m+tdbQDqpt7cIOtLFKV+1k/WXvhwTcOk9bNBtP3i8uj8LELjoCGEtiBysO1HesIuAVtfOcjJ3EPUUSSzCktqDEG7tKltK+oSeCvProwF2tYxhpdO1gmkIdTHFtn3338fpl4QEh0tcaNIOi7Y4WDnxf4Kq7VXTZpk+7k60Fe/GsBV6sIH+CMkdBRNuaHPSpmIxrafvjXCvmwEnM11FOMeBhKi9jlvX3bpMgTlKcdXf3xdNnLzMML2EWNT1kd36wTVZ+sU6If92VqEgSN9huSrEezAs5B/aC9Kkywoa19k4p5x0IcbNfqNg5DQkYIogiP7grq4z0+lilq121u1hii1xzXa4br/JrT6R/0+8rITwrog1zb30gf7C6O8HcermDl9GBBDoqMGnkfkH9pWHyxYIPIInXcz/AzTF9iV11N929gqV29Orxp02a065cAhviLO2bxWJO2CCIAxKT+uUbtg29Ox759mJfShHxoAIOq7BekUi2jKUXfXwOuT43tEuoNIR/rjZxLbNkQcx+6yK1/B821r4EWciPSqQY3dQkJ3ORCgkCpHeXWOTnQZiesQgN+6GwLut4SLYPWnHHrRL2D75w0epT1dyEXNCLTFAIjy7xpo4A0Fj8V5P5q2h/5guQY96wkNZA/4oHdMhrQRgXa77BYSugY2tyQiiTT65+VdiCIN94loMlpEXMpxb27QcQ965UaxoEGoyD0UUV9y6EP+SQO7yWcKQkN0qRn0fI/y448/TrtHcKIv8LlPe+GEuGC5YjGY0ACDDE3w/Szgp5MhkVKozcs1CKMI0wcYnhf3iX42BYswlEQleOdbx1v4IDRutC+hZuDmSAkiO6nOfOrRNP8GwtKkwyKC1xcAAAAASUVORK5CYII=",
        "token": "3412455821517724516924622119048843510743024321310325124",
        "som": null
      };
      this.captcha.imagem = this.retornoCaptcha.imagem;
      this.captcha.token = this.retornoCaptcha.token;
      this.util.endLoading();
    } else {
      this.loginProvider.recuperarCaptcha().then( ( response: any ) => {
        console.log('Retorno captcha', response);
        this.captcha.imagem = response.imagem;
        this.captcha.token = response.token;
        this.util.endLoading();
      } ).catch( ( error ) => {
        console.error( error );
        this.util.endLoading();
      })
    }
  }

  continuar() {
    if (!this.cpf) {
      this.toastCtrl.create({
        message: 'É obrigatório informar um CPF.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }

    let campo = this.cpf.replace(/\D/g, '');

    this.campoValido = Util.validarCPF(campo);
    if (!this.campoValido) {
      this.toastCtrl.create({
        message: 'CPF inválido.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }

    if(!this.textoCaptcha) {
      this.toastCtrl.create({
        message: 'Captcha inválido.',
        position: 'top',
        duration: 2500
      }).present();
      return;
    }

    this.util.onLoading('Recuperando dados');

    if(!this.recuperarSenha) {
      this.loginProvider.iniciacaoBC(campo, this.textoCaptcha, this.captcha.token).then((iniciacao: Iniciacao) => {
        this.iniciacao = new Iniciacao(iniciacao);
        console.log('iniciacao', this.iniciacao);
        this.storage.set('token_bc', this.iniciacao.token);
        this.util.endLoading();
        this.respostaCaptcha.emit({iniciacao: this.iniciacao, cpf: campo});
      }).catch((error) => {
        this.util.endLoading();
        this.toastCtrl.create({
          message: error.descricao,
          position: 'top',
          duration: 4000
        }).present();
      });
    } else {
      this.loginProvider.iniciacaoRSBC(campo, this.textoCaptcha, this.captcha.token).then((iniciacao: Iniciacao) => {
        this.iniciacao = iniciacao;
        this.util.endLoading();
        this.respostaCaptcha.emit({iniciacao: this.iniciacao, cpf: campo});
      }).catch((error) => {
        this.util.endLoading();
        this.toastCtrl.create({
          message: error.descricao,
          position: 'top',
          duration: 4000
        }).present();
      });
    }
  }
}
