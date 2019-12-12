import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroduceClassroomPage } from './introduce-classroom';

@NgModule({
  declarations: [
    IntroduceClassroomPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroduceClassroomPage),
  ],
})
export class IntroduceClassroomPageModule {}
