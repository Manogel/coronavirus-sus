import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroMedicamentoPage } from './registro-medicamento';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

@NgModule({
  declarations: [
    RegistroMedicamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroMedicamentoPage),
    VirtualScrollerModule
  ],
})
export class RegistroMedicamentoPageModule {}
