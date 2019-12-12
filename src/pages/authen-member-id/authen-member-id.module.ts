import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthenMemberIdPage } from './authen-member-id';

@NgModule({
  declarations: [
    AuthenMemberIdPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthenMemberIdPage),
  ],
})
export class AuthenMemberIdPageModule {}
