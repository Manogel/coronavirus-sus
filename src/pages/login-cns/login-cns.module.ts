import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginCnsPage } from './login-cns';
import { FieldMask } from '../../util/field-mask';

@NgModule({
  declarations: [
    LoginCnsPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginCnsPage),
    FieldMask
  ],
})
export class LoginCnsPageModule {}
