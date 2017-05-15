import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { PopleInformation} from '../popleinformation/popleinformation';


@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html',
})
export class Mypage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mypage');
  }
  goPopleinformation(){
      this.navCtrl.push(PopleInformation);
  }
}
