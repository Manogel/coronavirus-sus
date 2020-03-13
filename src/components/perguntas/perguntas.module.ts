import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PerguntasComponent } from './perguntas';

@NgModule({
  declarations: [
    PerguntasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PerguntasComponent
  ],
  entryComponents: [
    PerguntasComponent
  ]
})
export class PerguntasComponentModule {}
