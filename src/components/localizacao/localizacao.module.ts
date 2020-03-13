import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { LocalizacaoComponent } from './localizacao';

@NgModule({
  declarations: [
    LocalizacaoComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LocalizacaoComponent
  ],
  entryComponents: [
    LocalizacaoComponent
  ]
})
export class LocalizacaoModule {}
