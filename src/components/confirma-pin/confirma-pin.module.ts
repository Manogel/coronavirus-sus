import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { ConfirmaPinComponent } from './confirma-pin';

@NgModule({
  declarations: [
    ConfirmaPinComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ConfirmaPinComponent
  ],
  entryComponents: [
    ConfirmaPinComponent
  ]
})
export class ConfirmaPinComponentModule {}
