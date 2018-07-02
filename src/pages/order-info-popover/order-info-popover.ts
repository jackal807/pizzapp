import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderInfoPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-info-popover',
  templateUrl: 'order-info-popover.html',
})
export class OrderInfoPopoverPage {

  order : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.order = navParams.get('order');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderInfoPopoverPage');
  }

}
