import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroDeSaudePage } from './registro-de-saude';
import { RegistroMembroComponent } from '../../components/registro-membro/registro-membro';

@NgModule({
  declarations: [
    RegistroDeSaudePage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroDeSaudePage),
    RegistroMembroComponent
  ],
})
export class RegistroDeSaudePageModule {}
