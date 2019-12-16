import { Dev } from './../../models/dev';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  public devs: Dev[] = [];

  constructor(public navCtrl: NavController) {
    this.devs.push(new Dev(
      "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/74209870_988570591476657_1834477413698895872_o.jpg?_nc_cat=106&_nc_oc=AQmSnYWiDvWy1d9Qo5oh_J0TuEm3AtptfR8sYF5BZZ2Ry_F3RvKTF2HtyZDwApWMnrU&_nc_ht=scontent.fsgn3-1.fna&oh=de28f595c1ad14b7dbe739896c00efb2&oe=5EB2AEA2",
      "Phan Trung Tính",
      "tinhpt.38@gmail.com"
    ));
    this.devs.push(new Dev(
      "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/69095997_163234094846059_4188448615250788352_o.jpg?_nc_cat=104&_nc_oc=AQl60_o1Ol3KeMXlW7HCrHgb59rSmENgYkR4POkE6iyBPBOJykq3mXRs-aapg7PsIik&_nc_ht=scontent.fsgn3-1.fna&oh=ff93a96f787374f94328b19744f77c38&oe=5EAEE7CD",
      "Hứa Duy Băng",
      "banghuaduy@gmail.com"
    ))
    this.devs.push(new Dev(
      "https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-9/51530752_1498590413633932_8098471474412650496_o.jpg?_nc_cat=103&_nc_oc=AQnwSxxxXpLbiUcYmsSldqFg2bSECneUM5b70D6wiq3S08_SXj5JfaGWMStEhLtgFOM&_nc_ht=scontent.fsgn4-1.fna&oh=f5d03dda5a9af4955467a0901285982a&oe=5E75A0FC",
      "Nguyễn Quốc Anh",
      "default@gmail.com"
    ));

    this.devs.push(new Dev(
      "https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-9/74693321_2556456397929059_6229254329409208320_o.jpg?_nc_cat=100&_nc_oc=AQlyVnIEZuOvv2IYFfLyGTkYltYYfYgm9oTzVY3UfinlOPfQ-KggKTQldLV3Po31l_E&_nc_ht=scontent.fsgn4-1.fna&oh=446b530d62a4b18d1535e5a6c8e05242&oe=5E68A948",
      "Trần Thanh Nhựt Đăng",
      "default@gmail.com"
    ));
    this.devs.push(new Dev(
      "https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-9/74693321_2556456397929059_6229254329409208320_o.jpg?_nc_cat=100&_nc_oc=AQlyVnIEZuOvv2IYFfLyGTkYltYYfYgm9oTzVY3UfinlOPfQ-KggKTQldLV3Po31l_E&_nc_ht=scontent.fsgn4-1.fna&oh=446b530d62a4b18d1535e5a6c8e05242&oe=5E68A948",
      "Lê Minh Nguyệt",
      "default@gmail.com"
    ));
    this.devs.push(new Dev(
      "",
      "Nguyễn Thị Thu Quyên",
      "default@gmail.com"
    ));
    
    this.devs.push(new Dev(
      "",
      "Nguyễn Bùi Bảo Quyên",
      "default@gmail.com"
    ));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
