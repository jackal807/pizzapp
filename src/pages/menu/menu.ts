import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';

import { EditPizzaPage } from '../edit-pizza/edit-pizza';
import { InfoPizzaPage } from '../info-pizza/info-pizza';

import { RestProvider } from '../../providers/rest/rest';

import {TextImg} from '../../directives/text-img/text-img';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  pizzas = [];
  pizzasShowed = [];
  idPizzeria : string;
  showSearch : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ws : RestProvider, public modalCtrl: ModalController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  this.idPizzeria = "58e37caddcc678207cc83fc0";
   this.getMenuByPizzeria(this.idPizzeria);
    this.showSearch = false;
  }
    
toggleShowSearch() {
    if(this.showSearch===true) this.showSearch = false;
    else this.showSearch = true;
}


  getMenuByPizzeria(name) {
    this.ws.getMenuByPizzeria(name)
        .subscribe(
        data => {
        this.pizzas = data;
        this.pizzasShowed = data;
        
        //this.sortAlphabetically();
            
        console.log("pizzas : ");
        console.log(this.pizzas);


        },
        err => console.log("error is " + err), // error
        () => console.log('read pizzas complete '+ this.pizzas) // complete
        );
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }


  showEditModal(actionType, idPizzeria, pizza) {
    if(!pizza) pizza = null;
    let modal = this.modalCtrl.create(EditPizzaPage, {actionType: actionType, idPizzeria: idPizzeria, pizza: pizza});
    modal.onDidDismiss(newPizzaSaved => {
    if(newPizzaSaved && newPizzaSaved!=null) {
        this.addOrReplacePizza(newPizzaSaved);
            if(newPizzaSaved["oldAssociation"] && newPizzaSaved["oldAssociation"]!=null) this.removePizzaFromList(newPizzaSaved, newPizzaSaved["oldAssociation"]);
        }
            
     });
    modal.present();
  }
    
    
  showInfoModal(idPizzeria, pizza) {
    let modal = this.modalCtrl.create(InfoPizzaPage, {idPizzeria: idPizzeria, pizza: pizza});
    modal.present();
  }

    
sortAlphabetically() {
    this.pizzasShowed.sort(function(a, b){
    if(a["pizzamenu"][0] && b["pizzamenu"][0]) {
        if(a["pizzamenu"][0]["name"] < b["pizzamenu"][0]["name"]) return -1;
        if(a["pizzamenu"][0]["name"] > b["pizzamenu"][0]["name"]) return 1;
    }
    return 0;
})
}


addOrReplacePizza(newPizzaSaved) {
  var found = false;
  this.pizzas.forEach(function(item, index, object) {
    if (item["_id"] === newPizzaSaved["_id"]) {
    found = true;
      object[index]["pizzamenu"][0] = newPizzaSaved["pizzamenu"][0];
    }
  });
  if(!found) {
    console.log("La pizza non è stata trovata, aggiungo la nuova :");
    console.log(newPizzaSaved);
    this.pizzas.push(newPizzaSaved);
  }
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



deletePizza(pizza, showConfirm) {
      var idPizza = pizza["pizzamenu"][0]["_id"];
      this.ws.deletePizza(idPizza).subscribe(
        data => {
            console.log(data);
            this.removePizzaFromList(pizza, pizza["_id"]);
        },
        err => console.log("error is " + err), // error
        () => {if(showConfirm == true) this.showResultToast("Pizza correttamente eliminata")}
        );
 }


 showResultToast(msg) {
     let toast = this.toastCtrl.create({
       message: msg,
       duration: 3000
     });
     toast.present();
   }


  removePizzaFromList(pizza, id) {
      this.pizzas.forEach(function(item, index, object) {
        if (item["_id"] === id) {
          object.splice(index, 1);
        }
      });
  }




 showDeletePizzaConfirm(pizza) {
     let confirm = this.alertCtrl.create({
       title: 'Elimina pizza',
       message: 'Sicuro di voler eliminare la pizza ' + pizza["pizzamenu"][0]["name"] + '?',
       buttons: [
         {
           text: 'No',
           handler: () => {

           }
         },
         {
           text: 'Si',
           handler: () => {
             this.deletePizza(pizza, true);
           }
         }
       ]
     });
     confirm.present();
   }

filterItems(ev: any) {
    this.pizzasShowed = this.pizzas;
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.pizzasShowed = this.pizzas.filter(function(item) {
              if(!item || ! item["pizzamenu"] || !item["pizzamenu"][0]) return false;
              return item["pizzamenu"][0]["name"].toLowerCase().includes(val.toLowerCase());
      });
this.pizzasShowed = this.pizzasShowed;
    }
  }
    

   }
