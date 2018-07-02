import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, ViewController} from 'ionic-angular';


import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the EditPizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-pizza',
  templateUrl: 'edit-pizza.html',
})
export class EditPizzaPage {

  actionType : string;
  editmode : boolean;
  pizza = {};
  idPizzeria : string;
  newPizzaSaved = {};
  newPizzamenu = {};

  loader : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ws : RestProvider, public alertCtrl: AlertController, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public viewCtrl: ViewController) {
      this.editmode = false;
      this.actionType = navParams.get('actionType');
      this.idPizzeria = navParams.get('idPizzeria');
      let p = navParams.get('pizza');
      if(p != null) {
        this.pizza = { "name" : p["pizzamenu"][0].name, "ingredients": p["pizzamenu"][0].ingredients, price: (p.price*10), "oldAssociation": p["_id"] };
        this.editmode = true;
      } else this.pizza = { "name" : "", "ingredients": "", price: 0.00 };


  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPizzaPage');
  }

  closeModal() {
    this.navCtrl.pop();
}


dismissModal(dataCallback) {
  this.viewCtrl.dismiss(dataCallback);
}


presentLoading(msg) {
    this.loader = this.loadingCtrl.create({
      content: msg,
      duration: 5000
    });
    this.loader.present();
  }


  closeLoading() {
    this.loader.dismiss();
  }


  showResultToast(msg) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000
      });
      toast.present();
    }

saveChanges() {
    this.presentLoading('Salvataggio pizza in corso...');

    if(this.editmode == false) {
          let p = {"name": this.pizza["name"], "ingredients": this.pizza["ingredients"]};
          this.ws.addPizza(p).subscribe(
            data => {
                this.newPizzaSaved = {pizzamenu : []};
                this.newPizzaSaved["pizzamenu"].push(data["newPizza"]);
                var newPizzaId = data.newPizza._id;
                this.ws.addPizzaToMenuPizzeria({"pizzeria" : this.idPizzeria, "pizza": newPizzaId, "price": this.pizza["price"]/10}).subscribe(
                  data => {
                      this.newPizzamenu = data["association"];
                      this.newPizzaSaved["_id"] = this.newPizzamenu["_id"];
                      this.newPizzaSaved["price"] = this.newPizzamenu["price"];
                      this.closeLoading();
                  },
                  err => console.log("error is " + err), // error
                  () => {
                          this.showResultToast("Pizza correttamente inserita nel menu");
                          this.dismissModal(this.newPizzaSaved);
                        }
                  );
            },
            err => console.log("error is " + err), // error
            () => {}
            );
    } else {
      //editmode == true, si sta modificando una pizza esistente
        let p = {"name": this.pizza["name"], "ingredients": this.pizza["ingredients"]};
        
        this.ws.addPizza(p).subscribe(
            data => {
                this.newPizzaSaved = {pizzamenu : []};
                this.newPizzaSaved["pizzamenu"].push(data["newPizza"]);
                var newPizzaId = data.newPizza._id;
                this.ws.addPizzaToMenuPizzeria({"pizzeria" : this.idPizzeria, "pizza": newPizzaId, "price": this.pizza["price"]/10}).subscribe(
                  data => {
                      this.newPizzamenu = data["association"];
                      this.newPizzaSaved["_id"] = this.newPizzamenu["_id"];
                      this.newPizzaSaved["price"] = this.newPizzamenu["price"];
                      
                      this.newPizzaSaved["oldAssociation"] = this.pizza["oldAssociation"];
                      
                      
                      this.ws.deleteFromMenu(this.newPizzaSaved["oldAssociation"]).subscribe(
                          data => {

                              this.closeLoading();
                          },
                          err => console.log("error is " + err), // error
                          () => {
                                  this.showResultToast("Pizza correttamente aggiornata nel menu");
                                  this.dismissModal(this.newPizzaSaved);
                                }
                          );
                      
                      
                      
                      
                      
                  },
                  err => console.log("error is " + err), // error
                  () => {
                          
                        }
                  );
            },
            err => console.log("error is " + err), // error
            () => {}
            );
        

    }


}




showSavePizzaConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Salva modifiche',
      message: 'Sicuro di voler salvare la pizza' + this.pizza["name"] + '?',
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        },
        {
          text: 'Si',
          handler: () => {
            this.saveChanges();
          }
        }
      ]
    });
    confirm.present();
  }




}
