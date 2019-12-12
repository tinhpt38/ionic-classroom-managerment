import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectClassroomPage } from './select-classroom';

@NgModule({
  declarations: [
    SelectClassroomPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectClassroomPage),
  ],
})
export class SelectClassroomPageModule {}
