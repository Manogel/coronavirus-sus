import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { DescricaoDoCasoComponent } from './descricao-do-caso';

@NgModule({
  declarations: [
    DescricaoDoCasoComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    DescricaoDoCasoComponent
  ],
  entryComponents: [
    DescricaoDoCasoComponent
  ]
})
export class DescricaoDoCasoModule {}
