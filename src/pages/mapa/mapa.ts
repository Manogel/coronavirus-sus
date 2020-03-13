import { ListaSintomasPage } from '../lista-sintomas/lista-sintomas';
import { SaudeProvider } from '../../providers/saude.provider';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Events, FabContainer, ModalController, NavController, Platform } from 'ionic-angular';
import { IonicUtilProvider } from "../../providers/ionic-util";
import * as _ from 'underscore';
//import { Geolocation } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';
import { Storage } from "@ionic/storage";
import { MapProvider } from "../../providers/map.provider";
import { SintomasPage } from "../sintomas/sintomas";
import { ModalPage } from '../modal/modal';
import { NotificacaoPage } from '../notificacao/notificacao';
import { Device } from '@ionic-native/device';

declare let google;
declare let MarkerClusterer;

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})

export class MapaPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('fab') fab: FabContainer;

  /*public profissionalSaude: boolean = false;
  public usuarioProfissionalSaude: boolean = false;
  map: any;
  connectionStatus: any[] = [];
  userMarker: any;
  userLatLng: any;
  localidades: any[] = [];
  markers: any[] = [];
  resultados: any = {};
  markerCluster: any;
  recarregar:boolean = true;
  sintomasList: Array<any> = [];
  boxShadow = false;
  currentPosition: any;
  markerSelected: any;
  cardMapa = false;

  clusterStyles = [
    {
      textColor: 'white',
      url: 'assets/imgs/clustering/54x54.png',
      height: 56,
      width: 56
    }
  ];
  mcOptions = { gridSize: 50, minimumClusterSize: 1, maxZoom: 13, styles: this.clusterStyles };

  updateLocalidades = false;

  constructor(
    public navCtrl: NavController,
    private network: Network,
    private events: Events,
    private storage: Storage,
    private saudeProvider: SaudeProvider,
    private mapProvider: MapProvider,
    private util: IonicUtilProvider,
    private geolocation: Geolocation,
    public modalCtrl: ModalController,
    private platform: Platform,
    private device: Device
  ){}

  ionViewWillLeave(){
    this.events.unsubscribe('modal-open');
    this.events.unsubscribe('modal-close');
    this.boxShadow = false;
    // if (!this.cardMapa) this.fab.close();
  }

  ionViewDidLoad() {
    if (this.platform.is('cordova')){
      if (this.network.type || true) {
        this.connectionStatus.push(this.network.type);
        if (!this.mapProvider.isInitialised()) {
          this.mapProvider.load().then(m => {
            this.initMap();
          })
        } else {
          this.initMap();
        }
      }
    } else {
      this.initMap();
    }
  }

  ionViewDidEnter(){
    this.storage.get('profissional-saude').then((p) => {
      this.profissionalSaude = p;
      this.storage.get('usuario-profissional-saude').then((u) => {
        this.usuarioProfissionalSaude = u;
      });
    });

    this.events.subscribe('modal-open', (data) => {
      if (data){
        this.recarregar=false;
        if (this.recarregar)  this.initMap();

      }
    });
    this.events.subscribe('modal-close', (data) => {
      if (data){
        this.recarregar=true;
        if (this.recarregar)  this.initMap();
      }
    });

    if (this.updateLocalidades) this.initMap();

    this._updateLocalidades();
  }

  buscaLocalidades(location) {
    this.localidades = [];
    return new Promise((resolve) => {
      this.saudeProvider.getLocations(location).then((localidades: any) => {
        // console.log(localidades);

        _.each(localidades, (locais: any) => {
          if (locais) {
            this.localidades.push(locais);
          }
        });

        resolve(this.localidades);
      });
    })
  }

  abrirSintomas() {
    this.boxShadow = false;
    // this.fab.close();
    this.modalCtrl.create(ListaSintomasPage,
      { lista: this.localidades }
    ).present();
  }

  initMap() {
    this.updateLocalidades = false;
    this.util.onLoading('Buscando localização...');

    this.panToCurrentLocation();
  }

  panToCurrentLocation() {
    this.platform.ready().then(() => {
      this.geolocation.getCurrentPosition().then(pos => {

        const latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
          mapOptions = {
            center: latLng,
            zoom: 13,
            disableDefaultUI: true,
            maxZoom: 20,
            // mapTypeControl: true,
            mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.BOTTOM_RIGHT
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

        if (!this.map) this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


        this.currentPosition = pos;
        this.storage.set('guardioes-local', pos);
        this.userLatLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.userLocation(this.userLatLng);
        if (!this.userMarker) {
          this.userMarker = new google.maps.Marker({
            position: this.userLatLng,
            map: this.map,
            icon: {
              url: 'assets/icon/oval-icon.svg',
            }
          });
        }

        this.buscaLocalidades(pos.coords).then((l: Array<any>) => {
          // let grupo = _(l).groupBy('estou_bem');
          // this.resultados = {
          //   bem: grupo[true] ? ((grupo[true].length) * 100 / (l.length)).toFixed(2) + '%' : '0%',
          //   mal: grupo[false] ? ((grupo[false].length) * 100 / (l.length)).toFixed(2) + '%': '0%',
          // };
          //
          // if (this.sintomasList.length > 0){
          //   l = this.filtraSintomas(l);
          // }

          this.loadLocations(l);
          this.util.endLoading();
        });

      }).catch(() => {
        this.util.toast('Ocorreu um erro ao buscar a sua localização!');
        this.util.endLoading();
      });
    });
  }

  private _updateLocalidades(){
    this.events.subscribe('update-localidades', () => {
      this.updateLocalidades = true;
    });
  }

  async loadLocations(localidades) {
    setTimeout(() => this.localidades = localidades.slice(),1000);
    this.removeMarkers();

    for (let localidade of localidades) {
      if (!localidade.estou_bem) {
        let marker = this.addMarker(localidade);
        localidade.marker = marker;
      }
    }

    // this.markerCluster = new MarkerClusterer(this.map, this.markers, this.mcOptions);

    // google.maps.event.addListener(this.markerCluster, 'clusterclick', (cluster) => {
    //   //----Get markers
    //   let markers = cluster.getMarkers();
    //   let lista = [];

    //   //Get all the titles
    //   for (let i = 0; i < markers.length; i++) {
    //     lista.push(JSON.parse(markers[i].getTitle()));
    //   }
    //   //----
    //   // this.modalCtrl.create(ListaSintomasPage,
    //   //   { lista: lista },
    //   //   {
    //   //     enterAnimation: 'fade-transition',
    //   //     leaveAnimation: 'fade-transition',
    //   //     cssClass: 'modal-lista-sintomas-page'
    //   //   }
    //   // ).present();
    // });

  }

  addMarker(place: any) {
    let latitude: Number = parseFloat(place.latitude);
    let longitude: Number = parseFloat(place.longitude);

    let marker = new google.maps.Marker({
      map: this.map,
      title: JSON.stringify(place),
      // animation: google.maps.Animation.DROP,
      position: { lat: latitude, lng: longitude },
      icon: new google.maps.MarkerImage('assets/icon/mapmark.svg',
    null, null, null, new google.maps.Size(40,40)),
    });
    marker.addListener('click', () => {
      this.markerSelected = place;
      this.cardMapa = true;
    });
    this.markers.push(marker);
    return marker;
  }

  async removeMarkers() {
    this.localidades = [];
    for (let marker of this.markers) {
      marker.setMap(null);
    }
    this.markers = [];
    if (this.markerCluster) this.markerCluster.clearMarkers();
  }

  /!*userLocation(latLng) {
    if (!latLng) return;
    this.map.setZoom(13);
    this.map.panTo(latLng);
  }*!/

  private _evtNotificacao(){

  }

  /!*showModal(show, comoEstou){
    let modal = this.modalCtrl.create(ModalPage,
      { showModalInfo: show , comoEstou: comoEstou },
      {
        enterAnimation: 'fade-transition',
        leaveAnimation: 'fade-transition',
        cssClass: 'modal-status-saude-page'
      }
    );
    modal.present();

    this.events.publish('modal-open', true);
    modal.onDidDismiss(data => {
      this.events.publish('modal-close', true);
    });
  }

  abrirFiltro() {
    this.boxShadow = false;
    // this.fab.close();
    this.events.publish('modal-open', true);
    let modal = this.modalCtrl.create(SintomasPage, { status: 'filtro' , sintomasFiltro: this.sintomasList });
      modal.present();
      modal.onDidDismiss((date) => {
        if (date && date.filter){
          this.sintomasList = date.sintomasList.filter(sin => sin.isSelected);
          this.events.publish('modal-close', true);
        }
      });
  }

  abrirNotificacoes(fab){
    this.boxShadow = false;
    // fab.close();
    let modal = this.modalCtrl.create(NotificacaoPage);
    modal.present();
    modal.onDidDismiss((show?) => {
      if (show && show.notificacaoSucesso){
        let modal = this.modalCtrl.create(ModalPage,
          { showModalInfo: true , notificacoesSucesso: true },
          {
            enterAnimation: 'fade-transition',
            leaveAnimation: 'fade-transition',
            cssClass: 'modal-status-saude-page'
          }
        );
        modal.present();
      }
    });
  }

  filtraSintomas(l): Array<any>{
    return l.filter(loc => {
      return loc['sintomas'].some(sint => {
        return this.sintomasList.filter((sintoma) => {
          return sint.id === sintoma.id;
        }).length >= 1
      });
    });
  }

  _updateMarkers(sintoma){
    sintoma.isSelected = !sintoma.isSelected;
    this.sintomasList = this.sintomasList.filter(sin => sin.isSelected);
    this.removeMarkers();
    this.panToCurrentLocation();
  }*/
/*
  abrirModalStatus(option?, fab?: FabContainer) {
    this.boxShadow = !this.boxShadow;
    if (option){
      // fab.close();
      this.boxShadow = false;
      switch (option) {
        case 'notificacao':
          this._evtNotificacao();
          break;
        case 'estoubem'   :
          this._evtEstouBem();
          break;
        case 'estoumal'   :
          this._evtEstouMal();
          break;
        default:
          break
      }
    }
  }*/

 /* private _evtEstouBem(){
    if (this.currentPosition){
      this.events.publish('modal-open', true);
      let pontos = {
        latitude: this.currentPosition.coords.latitude,
        longitude: this.currentPosition.coords.longitude,
        estou_bem: trues,
        sintomas: [],
        device: this.device.uuid
      };
      this.saudeProvider.createPonto(pontos).then(r => {
        this.showModal(true, 'bem');
      });
    }
  }

  private _evtEstouMal(){
    this.events.publish('modal-open', true);
    this.navCtrl.push(SintomasPage);
  }*/
}
