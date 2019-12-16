import { HomePage } from './../home/home';
import { Classroom } from './../../models/classroom';
import { FirebaseDataProvider } from './../../provider/firebase_data_provider';
import { Member } from './../../models/member';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: FirebaseDataProvider) {
  }

  public member: Member;
  public classroom: Classroom

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ngOnInit(){
    let data = this.navParams.data;
    this.member = data.member;
    this.classroom = data.classroom;
  }

  onDeleteMemberClick(){
    this.service.deleteMember(this.classroom, this.member);
    this.navCtrl.setRoot(HomePage);
  }

}
