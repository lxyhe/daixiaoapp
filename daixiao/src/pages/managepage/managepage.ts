import { Component } from '@angular/core';
import {  NavController, NavParams} from 'ionic-angular';
import { PaymentPage } from '../paymentpage/paymentpage';
import { MoneyList } from '../moneylistpage/moneylistpage';

@Component({
  selector: 'page-manage-page',
  templateUrl: 'managepage.html',
})
export class ManagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagePage');
  }
  getobject() {
    this.navCtrl.push(PaymentPage)
  }
  goMoneyList(){
    this.navCtrl.push(MoneyList)
  }

}
