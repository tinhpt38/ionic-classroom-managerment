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

  public teacherName: string = "Not set";
  public monitorName: string = "Not set";
  public total: number = 0;
  public male: number = 0;
  public female: number = 0;
  public classroom: Classroom;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroduceClassroomPage');
    this.preparingData();
  }

  ngOnInit(){
    this.classroom = this.navParams.data;
    this.preparingData();
  }


  preparingData(){
    if(this.classroom.members != null){
      this.total = this.classroom.members.length;
      this.findMale();
      this.findRole();
    }
  }

  findRole(){
    this.classroom.members.forEach((val) =>{
      if(val.role.toLowerCase() == "teacher"){
        this.teacherName = val.name;
      }
      if(val.role.toLowerCase() == "monitor"){
        this.monitorName = val.name;
      }
    })
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
    this.navCtrl.push(AuthenMemberIdPage, this.classroom).then(()=>{
      this.navCtrl.remove(this.navCtrl.getActive().index - 2,2);
    });
  }
  
  onNewMemberClick(){
    this.navCtrl.push(AuthentPasswordPage, this.classroom);
  }

}
