import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'phone-verification-code-page',
  templateUrl: 'phoneverificationcodepage.html',
})
export class PhoneverificationCodePage {
  public code_time: any = 60;
  public timer;
  public count=0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.timing();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidEnter() {

  }
  timing(){
    this.timer=setInterval(() => {
        this.code_time--;
        if(this.code_time==0){
          this.code_time="重新获取";
          clearInterval(this.timer);
          this.timer=0;
        }
    }, 1000)
  }
  timing_update(){
    if(!this.timer){
      this.code_time=60;
      this.timing();
    }
  }

  ionViewWillLeave() {
    clearInterval(this.timer);
  }
}
