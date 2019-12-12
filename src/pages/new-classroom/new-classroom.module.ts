import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewClassroomPage } from './new-classroom';

@NgModule({
  declarations: [
    NewClassroomPage,
  ],
  imports: [
    IonicPageModule.forChild(NewClassroomPage),
  ],
})
export class NewClassroomPageModule {}
