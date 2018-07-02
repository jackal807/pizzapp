import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the DatiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dati',
  templateUrl: 'dati.html',
})
export class DatiPage {

  pizzeria : any;
  idPizzeria : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ws : RestProvider, public toastCtrl: ToastController) {
      this.idPizzeria = "58e37caddcc678207cc83fc0";
      this.getPizzeriaById(this.idPizzeria);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatiPage');
  }



  getPizzeriaById(id) {
    this.ws.getPizzeriaById(id)
        .subscribe(
        data => {
        this.pizzeria = data;
    console.log("pizzeria : ");
            console.log(this.pizzeria);

            this.pizzeria["bigIncrease"] = this.pizzeria["bigIncrease"] * 10;
            this.pizzeria["smallReduction"] = this.pizzeria["smallReduction"] * 10;
            this.pizzeria["packageCost"] = this.pizzeria["packageCost"] * 10;
            this.pizzeria["deliveryCost"] = this.pizzeria["deliveryCost"] * 10;


        },
        err => console.log("error is " + err), // error
        () => console.log('read pizzeria complete ') // complete
        );
    }


    updatePizzeria() {
        let p = JSON.parse(JSON.stringify(this.pizzeria));
        p["bigIncrease"] = p["bigIncrease"] / 10;
        p["smallReduction"] = p["smallReduction"] / 10;
        p["packageCost"] = p["packageCost"] / 10;
        p["deliveryCost"] = p["deliveryCost"] / 10;


        this.ws.updatePizzeria({"updatedPizzeria" : p})
            .subscribe(
            data => {
                  this.showResultToast("Dati pizzeria aggiornati correttamente");

            },
            err => console.log("error is " + err), // error
            () => console.log('update pizzeria complete ') // complete
            );

    }



    showResultToast(msg) {
        let toast = this.toastCtrl.create({
          message: msg,
          duration: 3000
        });
        toast.present();
      }

}
