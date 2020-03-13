import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CaptchaComponent } from './captcha';
import { CommonModule } from '@angular/common';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CaptchaComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    BrMaskerModule
  ],
  exports: [
    CaptchaComponent
  ],
  entryComponents: [
    CaptchaComponent
  ]
})
export class CaptchaComponentModule {}
