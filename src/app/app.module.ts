import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { MenuPage } from '../pages/menu/menu';
import { OrdersPage } from '../pages/orders/orders';
import { DatiPage } from '../pages/dati/dati';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { EditPizzaPage } from '../pages/edit-pizza/edit-pizza';
import { InfoPizzaPage } from '../pages/info-pizza/info-pizza';
import { InfoOrderPage } from '../pages/info-order/info-order';
import { OrderInfoPopoverPage } from '../pages/order-info-popover/order-info-popover';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { MomentModule } from 'angular2-moment';

import * as io from 'socket.io-client';

import { SpeechRecognition } from '@ionic-native/speech-recognition';

import {TextImg} from '../directives/text-img/text-img';



@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    OrdersPage,
    DatiPage,
    TabsPage,
    EditPizzaPage,
    InfoPizzaPage,
    InfoOrderPage,
    OrderInfoPopoverPage,
    LoginPage, 
    TextImg

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    OrdersPage,
    DatiPage,
    TabsPage,
    EditPizzaPage,
    InfoPizzaPage,
    InfoOrderPage,
    OrderInfoPopoverPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    SpeechRecognition
  ]
})
export class AppModule {}
