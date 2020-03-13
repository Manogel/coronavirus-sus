import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { InformacoesBasicasBcComponent } from './informacoes-basicas-bc';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InformacoesBasicasBcComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    InformacoesBasicasBcComponent
  ],
  entryComponents: [
    InformacoesBasicasBcComponent
  ]
})
export class InformacoesBasicasBcModule {}
