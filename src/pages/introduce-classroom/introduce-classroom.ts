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
    this.monitorName = this.classroom.monitorId != null ? this.classroom.monitorId:"Not set";
    this.teacherName = this.classroom.teacherId != null ? this.classroom.teacherId:"Not set";
  }

  onViewDetailClick(){
    this.navCtrl.push(AuthenMemberIdPage, this.classroom);
  }
  
  onNewMemberClick(){
    this.navCtrl.push(AuthentPasswordPage, this.classroom);
  }

}
