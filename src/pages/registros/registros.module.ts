import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrosPage } from './registros';
import { RegistroMembroComponent } from '../../components/registro-membro/registro-membro';

@NgModule({
  declarations: [
    RegistrosPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrosPage),
    RegistroMembroComponent
  ],
})
export class RegistrosPageModule {}
