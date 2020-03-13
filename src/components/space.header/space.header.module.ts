import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpaceHeader } from './space.header';

@NgModule({
  declarations: [
    SpaceHeader
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SpaceHeader
  ],
  entryComponents: [
    SpaceHeader
  ]
})
export class SpaceHeaderComponentModule {}
