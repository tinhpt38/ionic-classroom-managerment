import { Classroom } from './../../models/classroom';
import { FirebaseDataProvider } from './../../provider/firebase_data_provider';
import { SelectClassroomPage } from './../select-classroom/select-classroom';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-new-classroom',
  templateUrl: 'new-classroom.html',
})
export class NewClassroomPage {

  public id: string;
  public sortName: string;
  public fullName: string;
  public prefix: string;
  public pwd: string;
  public cornfirm: string;
  
  constructor(public navCtrl: NavController, private alertCotler: AlertController,
    private service: FirebaseDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewClassroomPage');
  }


  async onDoneClick(){
    if(this.id == null ||
      this.sortName == null ||
      this.fullName == null ||
      this.pwd == null){
        this.showErr("Một trong các trường đang trống")
      }else if(!this.isValidPassword()){
        this.showErr("Mật khẩu không trùng khớp!")
      }else{
        let classroom = new Classroom(
          this.id, this.sortName, this.fullName, 
          this.prefix, this.pwd,
          "","",[]);
          let reslt = await this.service.addClassroom(classroom);
          if(reslt.state){
            this.navCtrl.push(SelectClassroomPage)
          }else{
            this.showErr(reslt.message);
          }
        
      }
  }

  isValidPassword(){
    return this.pwd == this.cornfirm;
  }

  showErr(msg:string){
    let alert = this.alertCotler.create({
      title:"Sometime wrong",
      message: msg,
      buttons: ["OK"]
    });

    alert.present();
  }
  

}
