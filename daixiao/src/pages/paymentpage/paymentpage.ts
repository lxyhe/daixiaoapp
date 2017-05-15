import { Component } from '@angular/core';
import {  NavController, NavParams ,ModalController } from 'ionic-angular';
import { PhoneverificationCodePage } from '../phoneverificationcodepage/phoneverificationcodepage';
/**
 * Generated class for the PaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment-page',
  templateUrl: 'paymentpage.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  phone_verification_code(){
    let modal = this.modalCtrl.create(PhoneverificationCodePage);
    modal.present();
  }
}
