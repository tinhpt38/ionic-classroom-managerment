import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthentPasswordPage } from './authent-password';

@NgModule({
  declarations: [
    AuthentPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthentPasswordPage),
  ],
})
export class AuthentPasswordPageModule {}
