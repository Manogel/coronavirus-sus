import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimeiroAcessoPage } from './primeiro-acesso';

@NgModule({
  declarations: [
    PrimeiroAcessoPage,
  ],
  imports: [
    IonicPageModule.forChild(PrimeiroAcessoPage)
  ],
})
export class PrimeiroAcessoPageModule {}
