import { AuthentPasswordPage } from './../authent-password/authent-password';
import { AuthenMemberIdPage } from './../authen-member-id/authen-member-id';
import { Classroom } from './../../models/classroom';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-introduce-classroom',
  templateUrl: 'introduce-classroom.html',
})
export class IntroduceClassroomPage implements OnInit{

  public teacherName: string;
  public monitorName: string;
  public total: number = 0;
  public male: number = 0;
  public female: number = 0;
  public classroom: Classroom;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroduceClassroomPage');
  }

  ngOnInit(){
    this.classroom = this.navParams.data;
    this.total = this.classroom.members.length;
    this.readingData();
  }


  readingData(){
    this.findMale();
    this.findRole();
  }

  findRole(){
    this.classroom.members.forEach((val) =>{
      if(val.role == "teacher"){
        this.teacherName = val.name;
      }
      if(val.role =="monitor"){
        this.monitorName == val.name;
      }
    })
    this.monitorName = this.monitorName == null?"Not set":this.monitorName;
    this.teacherName = this.teacherName == null?"Not set":this.teacherName;
  }

  findMale(){
    let count = 0;
    this.classroom.members.forEach((val) =>{
      if(val.gender == "male"){
        count++;
      }
    })
    this.male = count;
    this.female = this.total - this.male;
  }



  onViewDetailClick(){
    this.navCtrl.push(AuthenMemberIdPage, this.classroom);
  }
  
  onNewMemberClick(){
    this.navCtrl.push(AuthentPasswordPage, this.classroom);
  }

}
