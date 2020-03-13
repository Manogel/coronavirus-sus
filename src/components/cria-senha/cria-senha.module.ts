import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { CriaSenhaComponent } from './cria-senha';

@NgModule({
  declarations: [
    CriaSenhaComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CriaSenhaComponent
  ],
  entryComponents: [
    CriaSenhaComponent
  ]
})
export class CriaSenhaComponentModule {}
