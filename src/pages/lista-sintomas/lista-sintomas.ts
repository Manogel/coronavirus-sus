import { Component, ViewChild } from '@angular/core'
import { Content, NavParams, ViewController } from "ionic-angular";
import { AbstractBasePage } from '../abstract-base';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import * as _ from 'underscore';

@Component({
  selector: 'lista-sintomas',
  templateUrl: 'lista-sintomas.html'

})

export class ListaSintomasPage extends AbstractBasePage {

  @ViewChild(Content) content: Content;
  public lista: any = [];
  private empty:boolean = false;
  private doencas:Array<any> =[];
  private sintomas:any = [];
  private locais:any = [];
  public loading: boolean = true;

  constructor(
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public analytics: GoogleAnalytics
  ) {
    super('SintomasPage', analytics);
    this.locais = this.navParams.get('lista');
  }

  ionSelected() {
    this.content.scrollToTop();
  }

  loadMore(ev) {
    this.loading = false;
    // this.twitter.next().subscribe((tweets) => {
    //   this.loading = false;
    //   this.tweets = this.tweets.concat(tweets);
    //   ev.complete();
    // });
  }

  ionViewDidEnter() {
    this.lista = _(this.locais).groupBy('sintomas');
    _.each(this.lista, (sintoma: any) => {
      _.each(sintoma, (s: any) => {
        _.each(s.sintomas, (doenca: any) => {
          // if (doenca.id == 'outros') this.sintomas.push('Outros');
          this.sintomas.push(doenca.nome);
        })

      })
    });

    this.doencas = _(this.sintomas).groupBy();
    this.sintomas=[];
    _.each(this.doencas, (doenca: any) => {
      this.sintomas.push({sintoma:doenca[0],total:doenca.length});
    });
    this.empty = (this.lista.length == 0);
    this.loading = false;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
