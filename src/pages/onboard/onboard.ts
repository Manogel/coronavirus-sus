import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ModalController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { Storage } from "@ionic/storage";
import { TermoPage } from '../termo/termo';
@Component({
  selector: 'page-onboard',
  templateUrl: 'onboard.html'
})

export class OnboardPage {

  @ViewChild('slider') slider: Slides;

  lastSlide = false;
  slidIndex: any;

  onboarList: any = [
    {
      imagem: 'assets/imgs/onboard/onboard-1.png',
      titulo: `Bem-vindo ao <br>Coronavírus-SUS`,
      texto:  `A plataforma oficial do Ministério da Saúde com dicas, informações e notícias sobre a Doença pelo Coronavírus 2019 (COVID-19)`,
    },
    {
      imagem: 'assets/imgs/onboard/onboard-2.png',
      titulo: `Conheça um pouco mais sobre o COVID-19. Faça uma auto-avaliação rápida!`,
      texto:  `Responda algumas perguntas. Informe os sintomas que está sentindo, confirme ou descarte sua suspeita e encontre a unidade de saúde mais próxima para atendimento.`,
    }
  ];

  constructor(public navCtrl: NavController,
              private storage: Storage,
              public modalCtrl: ModalController) {
  }

  ionViewDidEnter() {
    this.slidIndex = this.slider.getActiveIndex();
    console.log('ionViewDidLoad OnboardPage');
  }

  onSlideChanged() {
    if (this.slider.getActiveIndex() >= 0 && this.slider.getActiveIndex() <= 2) {
      this.slidIndex = this.slider.getActiveIndex();
    }

    this.lastSlide = this.slider.isEnd();
  }

  pular() {
    this.slider.slideTo(2, 1000);
  }

  login() {
    console.log('evt login')
  }

  home() {
    this.storage.set('onboard-view', true);
    this.storage.get('termo').then((termo) => {
      if(termo) {
        this.navCtrl.setRoot(TabsPage);
      } else {
        this.navCtrl.setRoot(TermoPage, {showBackButton: false});
      }
    })

  }
}
