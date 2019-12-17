import { ProfilePage } from './../profile/profile';
import { Member } from './../../models/member';
import { Classroom } from './../../models/classroom';
import { FirebaseDataProvider } from './../../provider/firebase_data_provider';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage implements OnInit {


  public classroom: Classroom;
  public members: Member[];
  timeoutId: NodeJS.Timer;
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: FirebaseDataProvider) {
  }

  async ngOnInit() {
    this.classroom = this.navParams.data;
    this.members = await this.service.getAllMembers(this.classroom.id);
  }


  onItemClick(item: Member) {
    let data = {
      classroom: this.classroom,
      member: item,
    }
    
    this.navCtrl.push(ProfilePage, data);
  }

  async doRefresh(event){
     setTimeout(async () => {
      this.members = await this.service.getAllMembers(this.classroom.id);
      event.complete();
     }, 1000);
  }

  ionViewDidEnter(){
    this.manualRefresh();
  }


  async refresh(){
    this.members = await this.service.getAllMembers(this.classroom.id);
  }

  initRefresh(){
    this.refresh();
    this.timeoutId = setInterval(() => this.refresh(), 2 * 1000);
  }

  stopRefresh(){
    clearInterval(this.timeoutId);
  }

  manualRefresh(){
    this.stopRefresh();
    this.initRefresh();
  }



}
