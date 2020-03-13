import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { DadosNotificadorComponent } from './dados-notificador';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    DadosNotificadorComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    BrMaskerModule
  ],
  exports: [
    DadosNotificadorComponent
  ],
  entryComponents: [
    DadosNotificadorComponent
  ]
})
export class DadosNotificadorModule {}
