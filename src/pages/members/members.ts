import { Component, OnInit } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage implements OnInit{


  public id: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.id = this.navParams.data;
  }

  
}
