import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMemberBasicPage } from './add-member-basic';

@NgModule({
  declarations: [
    AddMemberBasicPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMemberBasicPage),
  ],
})
export class AddMemberBasicPageModule {}
