import { Classroom } from './../../models/classroom';
import { MembersPage } from './../members/members';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-authen-member-id',
  templateUrl: 'authen-member-id.html',
})
export class AuthenMemberIdPage implements OnInit{

  public classroom: Classroom;
  public memberID: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private alertCotler: AlertController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthenMemberIdPage');
  }

  ngOnInit(){
    this.classroom = this.navParams.data;
  }

  onViewDetailClick(){
    if(this.memberID == null){
      this.showErr("Chưa nhập vào ID!")
    }else{
      let prefix = this.memberID.substr(0,3);
      if(this.classroom.prefix != prefix){
        this.showErr("ID sinh viên không thuộc lớp!")
      }else{
        this.navCtrl.push(MembersPage, this.classroom);
      }
    }
  }

  showErr(msg: string){
    let alert = this.alertCotler.create({
      title: "Authentication",
      message: msg,
      buttons: ["OK"]
    });
    alert.present();
  }


}
