import { Component, ViewChild} from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ManagePage } from '../managepage/managepage';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild('mySlider') slides: Slides;
  public sliderInterval;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    this.sliderInterval = setInterval(() => {
      this.slides.slideNext(300, true);
    }, 3000);
  }
  ionViewWillLeave() {
    clearInterval(this.sliderInterval);
  }
  gomoney(){
    this.navCtrl.push(ManagePage);
  }
}
