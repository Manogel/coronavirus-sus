import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoRegistroPage } from './novo-registro';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    NovoRegistroPage,
  ],
  imports: [
    IonicPageModule.forChild(NovoRegistroPage),
    BrMaskerModule
  ],
})
export class NovoRegistroPageModule {}
