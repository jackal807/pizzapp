import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, PopoverController, ModalController, Select} from 'ionic-angular';

import { OrderInfoPopoverPage } from '../order-info-popover/order-info-popover';

import { RestProvider } from '../../providers/rest/rest';
import { InfoOrderPage } from '../info-order/info-order';

import { SpeechRecognition } from '@ionic-native/speech-recognition';

import * as io from 'socket.io-client';
import moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
@ViewChild('sectionSelect') sectionSelect: Select;

  orders = [];
  sizes = [];
  packages = [];
  filters = [];
  statusColors = {};
  statusBadgeColors = {};

  socket : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ws : RestProvider, public alertCtrl: AlertController, public toastCtrl: ToastController, public popoverCtrl: PopoverController, public modalCtrl: ModalController) {
    this.getOrdersByPizzeria('Unica');
    this.filters = [{"name":"Tutte", "value": "all"}, {"name":"Da preparare", "value": "pending"}];
    this.sizes = ['Ridotta', 'Normale', 'Gigante'];
    this.packages = ['Cartone', 'Incartata'];
    this.statusColors = {"working" : "readytogo", "refused": "refused", "sent": "light", "delivering": "onthego", "received": "light"};
    this.statusBadgeColors = {"working" : "secondary", "refused": "danger", "sent": "warn", "delivering": "primary", "received": "warn"};

    this.socket = io('https://young-mountain-54903.herokuapp.com');

    this.socket.on('neworder', (order) => {
       this.addNewOrder(order);
    });


  }


  showOrderInfoPopover(myEvent, order) {
    let popover = this.popoverCtrl.create(OrderInfoPopoverPage, {"order" : order});
    popover.present({
      ev: myEvent
    });
  }

    
  

  addNewOrder(order) {
    console.log(order);
    this.showResultToast("Arrivato un nuovo ordine!");
    order["pizzaList"].forEach(function(item, index, object) {
      item["new"] = true;
    });
    this.orders.push(order);
    this.orders.sort(function(a, b) {
        a = new Date(a.when.preferredTime);
        b = new Date(b.when.preferredTime);
        return a<b ? -1 : a>b ? 1 : 0;
    });
  }


  ionViewDidLoad() {
  }

  getOrdersByPizzeria(name) {
    this.ws.getOrdersByPizzeria(name)
        .subscribe(
        data => {
        this.orders = data;
        //this.orders = this.orders[0];
    console.log("orders : ");
            console.log(this.orders);


        },
        err => console.log("error is " + err), // error
        () => console.log('read orders complete '+ this.orders) // complete
        );
    }

updateOrderState(order, newState) {
  let data = { newState: newState, orderId: order["_id"], time : "12:30" };
  this.ws.updateOrderState(data)
      .subscribe(
      resp => {
          this.showResultToast('Aggiornamento ordine avvenuto con successo.')
          for(let o in this.orders) {
              if(this.orders[o]["_id"] === resp.updatedOrder["_id"]) this.orders[o] = resp.updatedOrder;
          }
      },
      err => this.showResultToast('Errore durante l operazione di cambio stato ordine.'),
      () => console.log('Order status update complete')
  );

}



showResultToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }


checkVocal() {
//this.speechRecognition.isRecognitionAvailable().then((available: boolean) => this.showResultToast("il vocal recognition è disponibile : " + available))
}


showFilterOptions() {
    this.sectionSelect.open();
}
    
showOrderUpdateConfirm(confirmState, order, newState) {
    let confirm = this.alertCtrl.create({
      title: 'Modifica stato ordine',
      message: 'Sicuro di voler cambiare lo stato dell\'ordine in ' + confirmState + '?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.updateOrderState(order, newState);
          }
        }
      ]
    });
    confirm.present();
  }

showOrderDetailsModal(order) {
    let modal = this.modalCtrl.create(InfoOrderPage, {order: order});
    modal.present();
  }


}

moment.locale('it');
