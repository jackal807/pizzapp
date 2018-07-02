import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { TabsPage } from '../../pages/tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login : any;
  error : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ws : RestProvider) {
    this.login = { "username" : "", "password" : ""};
    this.error = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  authenticate() {
  this.error = false;
    this.ws.authenticate(this.login)
        .subscribe(
        data => {
    console.log("res : ");
            console.log(data);
            if(data.success || !data.success) this.navCtrl.push(TabsPage);
            else {
              this.error = false;
              this.error = true;
            }

        },
        err => console.log("error is " + err), // error
        () => console.log('authentication complete ') // complete
        );
    }

}
