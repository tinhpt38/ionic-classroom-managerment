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


  onContinueClick() {
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
      this.major,
      this.birthday, 
      this.gender,
      this.idCard.toString(),
      this.phone,
      this.address,
      this.role
      );
      let result: ResultErr = this.service.addMember(member,this.data.classroom);
        if(result.state){
          this.navCtrl.push(MembersPage);
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
      || this.role.toLowerCase() == "moinitor") {
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

}
