import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionaMedicamentoPage } from './adiciona-medicamento';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    AdicionaMedicamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionaMedicamentoPage),
    BrMaskerModule
  ],
})
export class AdicionaMedicamentoPageModule {}
