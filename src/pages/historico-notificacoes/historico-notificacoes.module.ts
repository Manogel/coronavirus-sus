import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoNotificacoesPage } from './historico-notificacoes';

@NgModule({
  declarations: [
    HistoricoNotificacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoNotificacoesPage),
  ],
})
export class HistoricoNotificacoesPageModule {}
