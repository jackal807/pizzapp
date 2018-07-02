import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';



@IonicPage()
@Component({
  selector: 'page-info-pizza',
  templateUrl: 'info-pizza.html',
})
export class InfoPizzaPage {

pizza : any;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public ws : RestProvider) {
      this.pizza = navParams.get('pizza');
    console.log("** pizza : ");
    console.log(this.pizza);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPizzaPage');
  }
    
    closeModal() {
        this.navCtrl.pop();
    }
    
    
    
showResultToast(msg) {
     let toast = this.toastCtrl.create({
       message: msg,
       duration: 3000
     });
     toast.present();
   }
    
    updatePizzamenuAvailability(associationId, newState) {
      let data = {"associationId" : associationId, "newState": newState};
      this.ws.updatePizzamenuAvailability(data).subscribe(
        data => {
            console.log(data);
            this.showResultToast("Disponibilità pizza nel menu aggiornata");
        },
        err => console.log("error is " + err), // error
        () => {}
        );
}

}
