import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';
import { ChangePasswordPage } from '../changepasswordpage/changepasswordpage';
@Component({
  selector: 'popover-page',
  templateUrl: 'popoverpage.html'
})
export class PopoverPage {
  public ChangePasswordType: object = {
    paswordtype: null,
  };
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
  ) {

  }
  ChangLoginPassword() {
    this.ChangePasswordType["passwordtype"] = 1;
    this.navCtrl.push(ChangePasswordPage, {
      type: this.ChangePasswordType
    });
    this.viewCtrl.dismiss();
  }
  ChangePayPassword() {
    this.ChangePasswordType["passwordtype"] = 2;
    this.navCtrl.push(ChangePasswordPage, {
      type: this.ChangePasswordType
    });
    this.viewCtrl.dismiss();
  }
  // close() {

  // }
}
