import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { FindPassword } from '../findpassword/findpassword';
export enum PsdPageType {
  login = 1,
  pay = 2,
}
@Component({
  selector: 'changepassword-page',
  templateUrl: 'changepasswordpage.html'
})

export class ChangePasswordPage {
  public psdtypeparams;
  public pagetitle;
  constructor(
    public navCtrl: NavController,
    public params: NavParams
  ) {
    this.psdtypeparams = this.params.data;
    console.log(this.psdtypeparams.type.passwordtype);
    this.PsdInit();
  }
  PsdInit(){
    if(this.psdtypeparams.type.passwordtype==PsdPageType.login){
      this.pagetitle="重置登录密码"
    }
    if(this.psdtypeparams.type.passwordtype==PsdPageType.pay){
      this.pagetitle="重置支付密码"
    }
  }
  gofindpassword(){
    this.navCtrl.push(FindPassword);
  }
}
