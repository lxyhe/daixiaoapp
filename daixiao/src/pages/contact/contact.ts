import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService }from '../../providers/httpserver'


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,public http:HttpService) {
    this.init();
  }
  init(){
    this.http.getServe().then( res => {
      console.log(res);
      })
  }



}
