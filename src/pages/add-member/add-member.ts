import { Classroom } from './../../models/classroom';
import { MembersPage } from './../members/members';
import { ResultErr } from './../../provider/result_err';
import { FirebaseDataProvider } from './../../provider/firebase_data_provider';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Member} from '../../models/member';

@Component({
  selector: 'page-add-member',
  templateUrl: 'add-member.html',
})
export class AddMemberPage implements OnInit {

  public data: any;
  public major: string;
  public birthday: string;
  public gender: string;
  public idCard: number;
  public phone: string;
  public address; string;
  public role: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCotler: AlertController, private service: FirebaseDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMemberPage');
  }

  ngOnInit() {
    this.data = this.navParams.data;
  }


  async onContinueClick() {
    if (this.major == null ||
      this.birthday == null ||
      this.gender == null ||
      this.idCard == null ||
      this.phone == null ||
      this.address == null) {
      this.showErr("Một trong số các trường đang trống!");
    } else if (!this.isValidGender()) {
      this.showErr("Giới tính phải là Male, Female hoặc Other")
    } else if (!this.isValidRole()) {
      this.showErr("Vai trò phải là Teacher, Member hoặc là Monitor");
    }else{
      let member = new Member(
      this.data.id,
      this.data.classroom.id,
      this.data.name,
      this.major.toLowerCase(),
      this.birthday, 
      this.gender,
      this.idCard.toString(),
      this.phone,
      this.address,
      this.role.toLowerCase(),
      );
      let classroom: Classroom = this.data.classroom;
      let members = classroom.members;
      if(members == null){
        classroom.members = [];
      }
      classroom.members.push(member);
      let result: ResultErr = await this.service.addClassroom(classroom);
        if(result.state){
          this.pushAndReplacement(classroom);
        }else{
          this.showErr(result.message);
        }
    } 
  }

  isValidGender() {
    if (this.gender.toLowerCase() == "male"
      || this.gender.toLowerCase() == "female"
      || this.gender.toLowerCase() == "other") {
      return true;
    }
    return false;
  }

  isValidRole() {
    if (this.role.toLowerCase() == "teacher"
      || this.role.toLowerCase() == "member"
      || this.role.toLowerCase() == "monitor") {
      return true;
    }
    return false;
  }


  showErr(msg: string) {
    let alert = this.alertCotler.create({
      title: "Add Member",
      message: msg,
      buttons: ["OKE"]
    });
    alert.present();
  }

  pushAndReplacement(param: Classroom){
    this.navCtrl.push(MembersPage,param).then(()=>{
      let startIndex: number = this.navCtrl.getActive().index -3;
      this.navCtrl.remove(startIndex,5);
    });
  }
}
