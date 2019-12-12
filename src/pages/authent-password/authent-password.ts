import { Classroom } from './../../models/classroom';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AddMemberBasicPage } from '../add-member-basic/add-member-basic';

@Component({
  selector: 'page-authent-password',
  templateUrl: 'authent-password.html',
})
export class AuthentPasswordPage implements OnInit{

  private classroom : Classroom;
  public pwdRead: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCotler: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthentPasswordPage');
  }

  ngOnInit(){
    this.classroom = this.navParams.data;
  }

  onContinueClick(){  
    console.log("password  cls "+this.classroom.password);
    console.log("pwd read" + this.pwdRead);
    if(this.classroom.password == this.pwdRead){
      this.navCtrl.push(AddMemberBasicPage, this.classroom)
    }else{
      this.showErr("Mật khẩu không chính xác!");
    }
  }


  showErr(msg: string){
    let alert = this.alertCotler.create({
      title:"Authentication",
      message: msg,
      buttons: ["OK"]
    });

    alert.present();
  }

}
