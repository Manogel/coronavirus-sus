import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarMembroPage } from './adicionar-membro';

@NgModule({
  declarations: [
    AdicionarMembroPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarMembroPage),
  ],
})
export class AdicionarMembroPageModule {}
