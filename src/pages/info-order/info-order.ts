import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-order',
  templateUrl: 'info-order.html',
})
export class InfoOrderPage {

  order : any;
  total : number;
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.order = navParams.get('order');
      this.total = this.order.pizzaList.reduce(function(a,b){ return a.price+b.price;})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoOrderPage');
  }
    
  closeModal() {
        this.navCtrl.pop();
  }
    


}
