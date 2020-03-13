import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhePerfilPage } from './detalhe-perfil';

@NgModule({
  declarations: [
    DetalhePerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhePerfilPage),
  ],
})
export class DetalhePerfilPageModule {}
