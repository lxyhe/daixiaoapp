import { Component } from '@angular/core';
import {  NavController, NavParams} from 'ionic-angular';



@Component({
  selector: 'page-loginpage',
  templateUrl: 'loginpage.html',
})
export class Loginpage {
  public username;
  public password;
  public authcode;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Loginpage');
  }

  login(){
    if (this.username == "admin" && this.password == "123456") {
       this.navCtrl.push('TabsPage');
     }
  }


}
