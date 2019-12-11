import { MembersPage } from './../members/members';
import { FirebaseDataProvider } from './../../provider/firebase_data_provider';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

   constructor(public navCtrl: NavController, public service: FirebaseDataProvider) {
    console.log("constructor home")
  }

  public classroooms  = [];

  async ionViewDidLoad() {
    await this.getAllClassroom();
    console.log('ionViewDidLoad HomePage');
  }

    async getAllClassroom() {
    this.classroooms = await this.service.getAllClassroom();
  }

  onClassroomClick(item: any){
    this.navCtrl.push(MembersPage, item.id);
  }

}
