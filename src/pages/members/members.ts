import { ProfilePage } from './../profile/profile';
import { Member } from './../../models/member';
import { Classroom } from './../../models/classroom';
import { FirebaseDataProvider } from './../../provider/firebase_data_provider';
import { Component, OnInit } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage implements OnInit{


  public classroom: Classroom;
  public members: Member[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: FirebaseDataProvider) {
  }

  async ngOnInit() {
    this.classroom = this.navParams.data;
    this.members = await this.service.getAllMembers(this.classroom.id);
    // this.convertData();
  }

  findTeacher(){
    let teacher: Member;
    for(let i=0;i<this.members.length;i++){
      if(this.members[i].role == "teacher"){
        teacher = this.members[i];
      }
    }
    let indexOf = this.members.indexOf(teacher);
    this.members.splice(indexOf,1);
    return teacher;
  }

  convertData(){
    let teacher = this.findTeacher();
    this.members.splice(0,0,teacher);
  }

  onItemClick(item: Member){
    let data = {
      classroom: this.classroom,
      member: item,
    }
    this.navCtrl.push(ProfilePage, data);
  }


}
