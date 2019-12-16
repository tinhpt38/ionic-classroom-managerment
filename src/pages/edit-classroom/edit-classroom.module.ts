import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditClassroomPage } from './edit-classroom';

@NgModule({
  declarations: [
    EditClassroomPage,
  ],
  imports: [
    IonicPageModule.forChild(EditClassroomPage),
  ],
})
export class EditClassroomPageModule {}
