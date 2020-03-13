import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheNotificacaoPage } from './detalhe-notificacao';

@NgModule({
  declarations: [
    DetalheNotificacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheNotificacaoPage),
  ],
})
export class DetalheNotificacaoPageModule {}
