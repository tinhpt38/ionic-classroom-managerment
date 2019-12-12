import { IntroduceClassroomPage } from './../introduce-classroom/introduce-classroom';
import { FirebaseDataProvider } from './../../provider/firebase_data_provider';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-select-classroom',
  templateUrl: 'select-classroom.html',
})
export class SelectClassroomPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: FirebaseDataProvider) {
  }
  public classrooms = [];
  public isloading = true;
  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectClassroomPage');
  }

  async ngOnInit(){
      this.classrooms = await this.service.getAllClassroom();
      this.isloading = false;
  }

  onItemClick(item: any){
    this.navCtrl.push(IntroduceClassroomPage, item)
  }
   


}
