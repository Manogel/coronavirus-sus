import { Tabs } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { MapaPage } from '../mapa/mapa';
import { DicaPage } from '../dica/dica';
import { Device } from "@ionic-native/device";
import { CampanhasPage } from '../campanhas/campanhas';
import { PerfilPage } from '../perfil/perfil';
import { RegistrosPage } from '../registros/registros';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  @ViewChild('mainTabs') tabRef: Tabs;

  tab1Root = MapaPage;
  tab2Root = DicaPage;
  tab3Root = CampanhasPage;
  tab4Root = RegistrosPage;
  tab5Root = PerfilPage;
  btnDisable: boolean = false;
  isIphoneX: boolean = false;

  constructor(
    private device:Device
  ) {
    if (this.device.model === 'iPhone10,3' || this.device.model === 'iPhone10,6' || this.device.model === 'x86_64') {
      this.isIphoneX = true;
    }
  }

}
