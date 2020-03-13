import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { ConnectivityProvider } from './connectivity.provider';

export const MapLoaded = 'map.loaded';
declare var google;

@Injectable()
export class MapProvider {

  private mapInitialised: boolean = false;

  private timer: any;

  constructor(private events: Events, private connectivity: ConnectivityProvider) {}

  isInitialised(): boolean {
    return this.mapInitialised;
  }

  load() {
    return new Promise((resolve, reject) => {
      this.attachListeners();

      // if (this.connectivity.isOffline()) {
      //   reject();
      //   return;
      // }

      if (this.isLoaded()) {
        this.mapInitialised = true;
        this.events.publish(MapLoaded);
        resolve();
        return;
      }

      if (document.getElementById('googleMaps')) {
        return;
      }

      // Load the SDK
      window['mapInit'] = () => {
        this.mapInitialised = true;
        this.events.publish(MapLoaded);
        resolve();
      };




      if (!document.getElementById('googleMaps')) {
        let script_tag = document.createElement('script');
        script_tag.setAttribute('type', 'text/javascript');
        script_tag.setAttribute('id', 'googleMaps');
        script_tag.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?callback=mapInit&v=3&key=AIzaSyDvCGq-l3R_YMLVZHCkWydnTO8qv0uXAyk');
        (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script_tag);

        let script_cluster = document.createElement('script');
        script_cluster.setAttribute('type', 'text/javascript');
       
        script_cluster.setAttribute('src', 'markerclusterer.js');
        (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script_cluster);




      
    }

      // let script = document.createElement('script');
      // script.id = 'googleMaps';
      // script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
      // document.body.appendChild(script);
    });
  }

  isLoaded() {
    return !(typeof google === 'undefined' || typeof google.maps === 'undefined');
  }

  private attachListeners() {
    this.connectivity.watchOnline().subscribe(() => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (!this.mapInitialised) {
          this.load();
        }
      }, 2000);
    });
  }
}
