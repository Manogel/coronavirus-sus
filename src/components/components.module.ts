import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { RegistroMembroComponent } from './registro-membro/registro-membro';

@NgModule({
	declarations: [
    RegistroMembroComponent
  ],
	imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    RegistroMembroComponent
  ],
  entryComponents: [
    RegistroMembroComponent
  ]
})
export class ComponentsModule {}
