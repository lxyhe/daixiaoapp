import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';




import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PaymentPage}from '../pages/paymentpage/paymentpage';
import { Mypage } from '../pages/mypage/mypage';
import { ManagePage} from '../pages/managepage/managepage';
import { Loginpage} from '../pages/loginpage/loginpage';
import { PhoneverificationCodePage } from '../pages/phoneverificationcodepage/phoneverificationcodepage';
import { PopleInformation } from '../pages/popleinformation/popleinformation';
import { MoneyList} from '../pages/moneylistpage/moneylistpage';
import {　PopoverPage }from '../pages/popoverpage/popoverpage';
import { ChangePasswordPage } from '../pages/changepasswordpage/changepasswordpage';
import { FindPassword } from '../pages/findpassword/findpassword';


import { HttpService} from '../providers/httpserver.ts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PaymentPage,
    Mypage,
    ManagePage,
    Loginpage,
    PhoneverificationCodePage,
    PopleInformation,
    MoneyList,
    PopoverPage,
    ChangePasswordPage,
    FindPassword,
  ],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      backButtonText: " ",
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PaymentPage,
    Mypage,
    ManagePage,
    Loginpage,
    PhoneverificationCodePage,
    PopleInformation,
    MoneyList,
    PopoverPage,
    ChangePasswordPage,
    FindPassword
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpService,
  ]
})
export class AppModule { }
