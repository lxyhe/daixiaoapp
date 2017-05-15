import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController  } from 'ionic-angular';
import { PopoverPage } from '../popoverpage/popoverpage';

@Component({
  selector: 'pople-information',
  templateUrl: 'popleinformation.html',
})
export class PopleInformation {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mypage');
  }
  ChangePasswordPage(myEvent){
    console.log(myEvent);
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
