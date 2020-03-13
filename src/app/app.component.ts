import { Component, ViewChild } from '@angular/core';
import { IonicApp, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OnboardPage } from '../pages/onboard/onboard';
import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
import { MapProvider } from "../providers/map.provider";
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import * as Parse from 'parse';
import { Globals } from '../providers/globals';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any;
  @ViewChild('contentPrincipal') nav: Nav;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private ionicApp: IonicApp,
    private storage: Storage,
    private mapProvider: MapProvider,
    private splashScreen: SplashScreen,
    private globals: Globals
  ){
    platform.ready().then(() => {
      Parse.initialize(this.globals.parseAppId, this.globals.parseJsId, this.globals.masterKey);
      Parse.serverURL = this.globals.serverURL;

      this.mapProvider.load().then(() => {
        this.storage.get('show-alert-bc').then((data) => {
          if(data === null) {
            this.storage.set('show-alert-bc', true);
          }
        }).catch((error) => {
          console.log(error);
        });
        this.getStorageDados();
      }).catch(() => console.log('map not loaded'));

      this.registerBackButtonAction();
    });
  }

  getStorageDados() {
    this.storage.get('onboard-view').then((data) => {
      if (!data) {
        this.rootPage = OnboardPage;
        if (this.platform.is('cordova')){
          this.statusBar.backgroundColorByHexString('#ffffff');
          this.splashScreen.hide();
        }
      } else {
        this.rootPage = TabsPage;
        if (this.platform.is('cordova')){
          this.statusBar.backgroundColorByHexString('#ffffff');
          this.splashScreen.hide();
        }
      }
    }, (error) => {
      console.log('Erro = ', error);
    });
  }

  registerBackButtonAction() {
    this.platform.registerBackButtonAction(() => {
      try {
        if (this.platform.is('cordova') && this.screenOrientation.ORIENTATIONS.LANDSCAPE) {
          return;
        }
      } catch (err) {
        if (this.platform.is('cordova') && this.screenOrientation.ORIENTATIONS.LANDSCAPE) {
          return;
        }
      }

      let loading = this.ionicApp._loadingPortal.getActive();
      let activePortal = this.ionicApp._modalPortal.getActive() ||
        this.ionicApp._toastPortal.getActive() ||
        this.ionicApp._overlayPortal.getActive();

      if (loading) {
        return;
      }

      if (activePortal) {
        activePortal.dismiss();
        return;
      }

      let activeVC = this.nav.getActive();
      let page: any = activeVC.instance;

      if (!(page instanceof TabsPage)) {
        if (!this.nav.canGoBack()) {
          this.platform.exitApp();
          return;
        } else if (page instanceof TabsPage) {
          this.platform.exitApp();
          return;
        }
        this.nav.pop();
        return;
      }
    });
  }
}
