import { AddMemberPage } from './../add-member/add-member';
import { Member } from './../../models/member';
import { Classroom } from './../../models/classroom';
import { FirebaseDataProvider } from './../../provider/firebase_data_provider';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-add-member-basic',
  templateUrl: 'add-member-basic.html',
})
export class AddMemberBasicPage implements OnInit {

  public id: string;
  public name: string;
  public members: Member[];
  public classroom: Classroom;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private service: FirebaseDataProvider, private alertCotler: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMemberBasicPage');
  }

  async ngOnInit() {
    this.classroom = this.navParams.data;
  }

  async onContinueClick() {
    if (await this.service.isMemberExist(this.id, this.classroom.id)) {
      this.showErr("ID sinh viên bị trùng!");
    } else {
      let data = {
        classroom: this.classroom,
        id: this.id,
        name: this.name
      }
      this.navCtrl.push(AddMemberPage,data)
    }
  }

  showErr(msg: string) {
    let alert = this.alertCotler.create({
      title: "Authentication Student ID",
      message: msg,
      buttons: ["Oke"]
    });
    alert.present();
  }

}
