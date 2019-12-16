import { AboutPage } from './../about/about';
import { SelectClassroomPage } from './../select-classroom/select-classroom';
import { NewClassroomPage } from './../new-classroom/new-classroom';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

   constructor(public navCtrl: NavController) {
    console.log("constructor home")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  onSelectClassroomClick(){
    this.navCtrl.push(SelectClassroomPage)
  }

  onNewClassroomClick(){
    this.navCtrl.push(NewClassroomPage)
  }

  onAboutUsClick(){
    this.navCtrl.push(AboutPage);
  }

}
