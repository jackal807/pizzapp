webpackJsonp([8],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderInfoPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrderInfoPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderInfoPopoverPage = (function () {
    function OrderInfoPopoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.order = navParams.get('order');
    }
    OrderInfoPopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderInfoPopoverPage');
    };
    return OrderInfoPopoverPage;
}());
OrderInfoPopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-order-info-popover',template:/*ion-inline-start:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\order-info-popover\order-info-popover.html"*/'<ion-content padding>\n\n  Ciao!\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\order-info-popover\order-info-popover.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], OrderInfoPopoverPage);

//# sourceMappingURL=order-info-popover.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InfoOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoOrderPage = (function () {
    function InfoOrderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.order = navParams.get('order');
        this.total = this.order.pizzaList.reduce(function (a, b) { return a.price + b.price; });
    }
    InfoOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoOrderPage');
    };
    InfoOrderPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    return InfoOrderPage;
}());
InfoOrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-info-order',template:/*ion-inline-start:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\info-order\info-order.html"*/'<!--\n\n  Generated template for the InfoOrderPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n           <button ion-button icon-only (click)="closeModal()">\n\n               <ion-icon name="arrow-back"></ion-icon>\n\n           </button>\n\n    </ion-buttons>\n\n      \n\n    <ion-title>Info Ordine</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n<ion-card>\n\n  <img src="assets/img/infoorder.jpg"/>\n\n  <ion-card-content>\n\n    <ion-card-title>\n\n      Dettaglio ordine\n\n      </ion-card-title>\n\n    <p>\n\n      {{order.notes}}\n\n    </p>\n\n </ion-card-content>\n\n</ion-card>\n\n      \n\n<ion-card *ngFor="let pizza of order.pizzaList" >\n\n  <ion-card-content>\n\n    <ion-card-title>\n\n      {{pizza.pizza}}\n\n      </ion-card-title>\n\n    <p>\n\n      {{pizza.ingredients}}\n\n    </p>\n\n </ion-card-content>\n\n</ion-card>\n\n      \n\n  <ion-card>\n\n  <ion-card-content>   \n\n    <ion-list>\n\n     <ion-item>\n\n      <ion-label>\n\n        Orario\n\n      </ion-label>\n\n      <ion-icon name=\'clock\' item-start></ion-icon>\n\n         <ion-badge color="warn" item-end>\n\n           {{order.when.preferredTime | amLocal | amDateFormat: \'YYYY-MM-DD HH:mm\'}}\n\n         </ion-badge>\n\n    </ion-item> \n\n        \n\n        \n\n    <ion-item>\n\n      <ion-label>\n\n        Cliente\n\n      </ion-label>\n\n      <ion-icon name=\'contact\' item-start></ion-icon>\n\n         <ion-badge color="light" item-end>\n\n           {{order.user.name}} {{order.user.surname}}\n\n         </ion-badge>\n\n    </ion-item>\n\n        \n\n    \n\n    <ion-item>\n\n      <ion-label>\n\n        Telefono\n\n      </ion-label>\n\n      <ion-icon name=\'call\' item-start></ion-icon>\n\n        <a ion-button href="tel:+39{{order.user.phone}}" item-end>\n\n            {{order.user.phone}}\n\n        </a>\n\n    </ion-item>    \n\n    \n\n    \n\n    <ion-item>\n\n      <ion-label>\n\n        Totale\n\n      </ion-label>\n\n      <ion-icon name=\'logo-euro\' item-start></ion-icon>\n\n         <ion-badge item-end>\n\n           {{total | currency:\'EUR\':true:\'1.2-2\'}}\n\n         </ion-badge>\n\n    </ion-item> \n\n        \n\n    </ion-list>\n\n  </ion-card-content>\n\n</ion-card>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\info-order\info-order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], InfoOrderPage);

//# sourceMappingURL=info-order.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_info_popover_order_info_popover__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_order_info_order__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrdersPage = (function () {
    function OrdersPage(navCtrl, navParams, ws, alertCtrl, toastCtrl, popoverCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ws = ws;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.orders = [];
        this.sizes = [];
        this.packages = [];
        this.filters = [];
        this.statusColors = {};
        this.statusBadgeColors = {};
        this.getOrdersByPizzeria('Unica');
        this.filters = [{ "name": "Tutte", "value": "all" }, { "name": "Da preparare", "value": "pending" }];
        this.sizes = ['Ridotta', 'Normale', 'Gigante'];
        this.packages = ['Cartone', 'Incartata'];
        this.statusColors = { "working": "readytogo", "refused": "refused", "sent": "light", "delivering": "onthego", "received": "light" };
        this.statusBadgeColors = { "working": "secondary", "refused": "danger", "sent": "warn", "delivering": "primary", "received": "warn" };
        this.socket = __WEBPACK_IMPORTED_MODULE_5_socket_io_client__('https://young-mountain-54903.herokuapp.com');
        this.socket.on('neworder', function (order) {
            _this.addNewOrder(order);
        });
    }
    OrdersPage.prototype.showOrderInfoPopover = function (myEvent, order) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__order_info_popover_order_info_popover__["a" /* OrderInfoPopoverPage */], { "order": order });
        popover.present({
            ev: myEvent
        });
    };
    OrdersPage.prototype.addNewOrder = function (order) {
        console.log(order);
        this.showResultToast("Arrivato un nuovo ordine!");
        order["pizzaList"].forEach(function (item, index, object) {
            item["new"] = true;
        });
        this.orders.push(order);
        this.orders.sort(function (a, b) {
            a = new Date(a.when.preferredTime);
            b = new Date(b.when.preferredTime);
            return a < b ? -1 : a > b ? 1 : 0;
        });
    };
    OrdersPage.prototype.ionViewDidLoad = function () {
    };
    OrdersPage.prototype.getOrdersByPizzeria = function (name) {
        var _this = this;
        this.ws.getOrdersByPizzeria(name)
            .subscribe(function (data) {
            _this.orders = data;
            //this.orders = this.orders[0];
            console.log("orders : ");
            console.log(_this.orders);
        }, function (err) { return console.log("error is " + err); }, // error
        function () { return console.log('read orders complete ' + _this.orders); } // complete
        );
    };
    OrdersPage.prototype.updateOrderState = function (order, newState) {
        var _this = this;
        var data = { newState: newState, orderId: order["_id"], time: "12:30" };
        this.ws.updateOrderState(data)
            .subscribe(function (resp) {
            _this.showResultToast('Aggiornamento ordine avvenuto con successo.');
            for (var o in _this.orders) {
                if (_this.orders[o]["_id"] === resp.updatedOrder["_id"])
                    _this.orders[o] = resp.updatedOrder;
            }
        }, function (err) { return _this.showResultToast('Errore durante l operazione di cambio stato ordine.'); }, function () { return console.log('Order status update complete'); });
    };
    OrdersPage.prototype.showResultToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    OrdersPage.prototype.checkVocal = function () {
        //this.speechRecognition.isRecognitionAvailable().then((available: boolean) => this.showResultToast("il vocal recognition è disponibile : " + available))
    };
    OrdersPage.prototype.showFilterOptions = function () {
        this.sectionSelect.open();
    };
    OrdersPage.prototype.showOrderUpdateConfirm = function (confirmState, order, newState) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Modifica stato ordine',
            message: 'Sicuro di voler cambiare lo stato dell\'ordine in ' + confirmState + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.updateOrderState(order, newState);
                    }
                }
            ]
        });
        confirm.present();
    };
    OrdersPage.prototype.showOrderDetailsModal = function (order) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__info_order_info_order__["a" /* InfoOrderPage */], { order: order });
        modal.present();
    };
    return OrdersPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sectionSelect'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Select */])
], OrdersPage.prototype, "sectionSelect", void 0);
OrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-orders',template:/*ion-inline-start:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\orders\orders.html"*/'<!--\n\n  Generated template for the OrdersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Ordini</ion-title>\n\n      \n\n      \n\n      <ion-buttons right>\n\n           <button ion-button icon-only (click)="showFilterOptions()">\n\n               <ion-icon name="ios-funnel"></ion-icon>\n\n           </button>\n\n    </ion-buttons>\n\n      \n\n  </ion-navbar>\n\n    \n\n    \n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n\n\n    <ion-select #sectionSelect [(ngModel)]="filter">\n\n        <ion-option *ngFor="let filter of filters" [value]="filter.value">{{filter.name}}</ion-option>\n\n    </ion-select>\n\n\n\n\n\n  <ion-list>\n\n    <ion-item-group *ngFor="let order of orders" (dblclick)="showOrderDetailsModal(order)">\n\n\n\n        \n\n\n\n\n\n      <ion-item-divider [color]="statusColors[order.status.workingState]">\n\n\n\n        <!--\n\n        <button ion-button item-start color="primary" (click)="showOrderInfoPopover(myEvent, order)">\n\n          <ion-icon name="information-circle"></ion-icon>\n\n        </button>\n\n         -->\n\n\n\n        <ion-badge [color]="statusBadgeColors[order.status.workingState]" item-start>{{order.status.workingState == \'delivering\' ? \'SPEDITO\' : order.status.workingState == \'refused\' ? \'RIFIUTATO\' : order.status.workingState == \'working\' ? \'PRONTO\' : order.when.preferredTime | amTimeAgo}}</ion-badge>\n\n        \n\n\n\n        <button ion-button item-end color="danger" (click)="showOrderUpdateConfirm(\'rifiutato\', order, \'refused\')" [disabled]="order.status.workingState == \'delivering\' || order.status.workingState == \'received\'">\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n\n\n        <button ion-button item-end color="secondary" (click)="showOrderUpdateConfirm(\'lavorato\', order, \'working\')" [disabled]="order.status.workingState == \'delivering\' || order.status.workingState == \'received\'">\n\n          <ion-icon name="checkmark"></ion-icon>\n\n        </button>\n\n\n\n        <button ion-button item-end color="primary" (click)="showOrderUpdateConfirm(\'in consegna\', order, \'delivering\')" [disabled]="order.status.workingState !== \'working\'">\n\n          <ion-icon name="bicycle"></ion-icon>\n\n        </button>\n\n\n\n\n\n\n\n      </ion-item-divider>\n\n    <ion-item *ngFor="let pizza of order.pizzaList">\n\n      <ion-avatar item-start>\n\n        <img src="https://us.123rf.com/450wm/tribalium123/tribalium1231511/tribalium123151100036/47946282-pizza-on-cardboard-pizza-in-box-open-packing-box-for-pizza.jpg?ver=6"/>\n\n        <!--\n\n        <ion-img width="40" height="40" src="https://us.123rf.com/450wm/tribalium123/tribalium1231511/tribalium123151100036/47946282-pizza-on-cardboard-pizza-in-box-open-packing-box-for-pizza.jpg?ver=6"></ion-img>\n\n      -->\n\n      </ion-avatar>\n\n      <h2>{{pizza.pizza}}</h2>\n\n    <h3>{{packages[pizza.package]}}, {{sizes[pizza.size]}}</h3>\n\n    <p>{{order.notes}}</p>\n\n    <ion-note item-end>\n\n      <ion-badge color="secondary" *ngIf="pizza.new">\n\n          NUOVO\n\n      </ion-badge>\n\n    </ion-note>\n\n    </ion-item>\n\n</ion-item-group>\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\orders\orders.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], OrdersPage);

__WEBPACK_IMPORTED_MODULE_6_moment___default.a.locale('it');
//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPizzaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditPizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPizzaPage = (function () {
    function EditPizzaPage(navCtrl, navParams, ws, alertCtrl, toastCtrl, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ws = ws;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.pizza = {};
        this.newPizzaSaved = {};
        this.newPizzamenu = {};
        this.editmode = false;
        this.actionType = navParams.get('actionType');
        this.idPizzeria = navParams.get('idPizzeria');
        var p = navParams.get('pizza');
        if (p != null) {
            this.pizza = { "name": p["pizzamenu"][0].name, "ingredients": p["pizzamenu"][0].ingredients, price: (p.price * 10), "oldAssociation": p["_id"] };
            this.editmode = true;
        }
        else
            this.pizza = { "name": "", "ingredients": "", price: 0.00 };
    }
    EditPizzaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPizzaPage');
    };
    EditPizzaPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    EditPizzaPage.prototype.dismissModal = function (dataCallback) {
        this.viewCtrl.dismiss(dataCallback);
    };
    EditPizzaPage.prototype.presentLoading = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
            duration: 5000
        });
        this.loader.present();
    };
    EditPizzaPage.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    EditPizzaPage.prototype.showResultToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    EditPizzaPage.prototype.saveChanges = function () {
        var _this = this;
        this.presentLoading('Salvataggio pizza in corso...');
        if (this.editmode == false) {
            var p = { "name": this.pizza["name"], "ingredients": this.pizza["ingredients"] };
            this.ws.addPizza(p).subscribe(function (data) {
                _this.newPizzaSaved = { pizzamenu: [] };
                _this.newPizzaSaved["pizzamenu"].push(data["newPizza"]);
                var newPizzaId = data.newPizza._id;
                _this.ws.addPizzaToMenuPizzeria({ "pizzeria": _this.idPizzeria, "pizza": newPizzaId, "price": _this.pizza["price"] / 10 }).subscribe(function (data) {
                    _this.newPizzamenu = data["association"];
                    _this.newPizzaSaved["_id"] = _this.newPizzamenu["_id"];
                    _this.newPizzaSaved["price"] = _this.newPizzamenu["price"];
                    _this.closeLoading();
                }, function (err) { return console.log("error is " + err); }, // error
                function () {
                    _this.showResultToast("Pizza correttamente inserita nel menu");
                    _this.dismissModal(_this.newPizzaSaved);
                });
            }, function (err) { return console.log("error is " + err); }, // error
            function () { });
        }
        else {
            //editmode == true, si sta modificando una pizza esistente
            var p = { "name": this.pizza["name"], "ingredients": this.pizza["ingredients"] };
            this.ws.addPizza(p).subscribe(function (data) {
                _this.newPizzaSaved = { pizzamenu: [] };
                _this.newPizzaSaved["pizzamenu"].push(data["newPizza"]);
                var newPizzaId = data.newPizza._id;
                _this.ws.addPizzaToMenuPizzeria({ "pizzeria": _this.idPizzeria, "pizza": newPizzaId, "price": _this.pizza["price"] / 10 }).subscribe(function (data) {
                    _this.newPizzamenu = data["association"];
                    _this.newPizzaSaved["_id"] = _this.newPizzamenu["_id"];
                    _this.newPizzaSaved["price"] = _this.newPizzamenu["price"];
                    _this.newPizzaSaved["oldAssociation"] = _this.pizza["oldAssociation"];
                    _this.ws.deleteFromMenu(_this.newPizzaSaved["oldAssociation"]).subscribe(function (data) {
                        _this.closeLoading();
                    }, function (err) { return console.log("error is " + err); }, // error
                    function () {
                        _this.showResultToast("Pizza correttamente aggiornata nel menu");
                        _this.dismissModal(_this.newPizzaSaved);
                    });
                }, function (err) { return console.log("error is " + err); }, // error
                function () {
                });
            }, function (err) { return console.log("error is " + err); }, // error
            function () { });
        }
    };
    EditPizzaPage.prototype.showSavePizzaConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Salva modifiche',
            message: 'Sicuro di voler salvare la pizza' + this.pizza["name"] + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.saveChanges();
                    }
                }
            ]
        });
        confirm.present();
    };
    return EditPizzaPage;
}());
EditPizzaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-edit-pizza',template:/*ion-inline-start:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\edit-pizza\edit-pizza.html"*/'<!--\n\n  Generated template for the EditPizzaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n    <ion-buttons left>\n\n           <button ion-button icon-only (click)="closeModal()">\n\n               <ion-icon name="arrow-back"></ion-icon>\n\n           </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title>{{actionType}} Pizza</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Nome</ion-label>\n\n      <ion-input type="text" [(ngModel)]="pizza.name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Ingredienti</ion-label>\n\n      <ion-input type="text" [(ngModel)]="pizza.ingredients"></ion-input>\n\n    </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <ion-row no-padding>\n\n        <ion-col text-center>\n\n          <ion-badge color="warn">\n\n            <span style="font-size: 4.5rem">{{(pizza.price/10) | currency:\'EUR\':true:\'1.2-2\'}}</span></ion-badge>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n\n\n\n\n\n\n        <ion-range [(ngModel)]="pizza.price" max="250" step="1">\n\n          <ion-icon range-left small >0</ion-icon>\n\n          <ion-icon range-right >25</ion-icon>\n\n        </ion-range>\n\n\n\n\n\n\n\n<ion-fab bottom right>\n\n    <button color="primary" ion-fab (click)="showSavePizzaConfirm()">\n\n      <ion-icon name="cloud-done"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\edit-pizza\edit-pizza.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], EditPizzaPage);

//# sourceMappingURL=edit-pizza.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPizzaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoPizzaPage = (function () {
    function InfoPizzaPage(navCtrl, navParams, toastCtrl, ws) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.ws = ws;
        this.pizza = navParams.get('pizza');
        console.log("** pizza : ");
        console.log(this.pizza);
    }
    InfoPizzaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPizzaPage');
    };
    InfoPizzaPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    InfoPizzaPage.prototype.showResultToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    InfoPizzaPage.prototype.updatePizzamenuAvailability = function (associationId, newState) {
        var _this = this;
        var data = { "associationId": associationId, "newState": newState };
        this.ws.updatePizzamenuAvailability(data).subscribe(function (data) {
            console.log(data);
            _this.showResultToast("Disponibilità pizza nel menu aggiornata");
        }, function (err) { return console.log("error is " + err); }, // error
        function () { });
    };
    return InfoPizzaPage;
}());
InfoPizzaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-info-pizza',template:/*ion-inline-start:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\info-pizza\info-pizza.html"*/'<!--\n\n  Generated template for the InfoPizzaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      \n\n    <ion-buttons left>\n\n           <button ion-button icon-only (click)="closeModal()">\n\n               <ion-icon name="arrow-back"></ion-icon>\n\n           </button>\n\n    </ion-buttons>\n\n      \n\n    <ion-title>Info Pizza</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n<ion-card>\n\n  <img src="assets/img/infopizza.jpg"/>\n\n  <ion-card-content>\n\n    <ion-card-title>\n\n      {{pizza.pizzamenu[0].name}}\n\n      </ion-card-title>\n\n    <p>\n\n      {{pizza.pizzamenu[0].ingredients}}\n\n    </p>\n\n      \n\n      \n\n    <ion-list>\n\n        <ion-item>\n\n      <ion-toggle color="secondary" [(ngModel)]="pizza.available" (ionChange)="updatePizzamenuAvailability(pizza[\'_id\'], pizza.available)" checked="pizza.available}}"></ion-toggle>\n\n      <ion-label>\n\n        Disponibile\n\n      </ion-label>\n\n      <ion-icon name=\'checkmark\' item-start></ion-icon>\n\n    </ion-item> \n\n        \n\n        \n\n     <ion-item>\n\n      <ion-label>\n\n        Prezzo\n\n      </ion-label>\n\n      <ion-icon name=\'logo-euro\' item-start></ion-icon>\n\n         <ion-badge item-end>\n\n            {{pizza.price | currency:\'EUR\':true:\'1.2-2\'}}\n\n         </ion-badge>\n\n    </ion-item> \n\n        \n\n    </ion-list>\n\n  </ion-card-content>\n\n</ion-card>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\info-pizza\info-pizza.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
], InfoPizzaPage);

//# sourceMappingURL=info-pizza.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_pizza_edit_pizza__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_pizza_info_pizza__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, ws, modalCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ws = ws;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.pizzas = [];
        this.pizzasShowed = [];
        this.idPizzeria = "58e37caddcc678207cc83fc0";
        this.getMenuByPizzeria(this.idPizzeria);
        this.showSearch = false;
    }
    MenuPage.prototype.toggleShowSearch = function () {
        if (this.showSearch === true)
            this.showSearch = false;
        else
            this.showSearch = true;
    };
    MenuPage.prototype.getMenuByPizzeria = function (name) {
        var _this = this;
        this.ws.getMenuByPizzeria(name)
            .subscribe(function (data) {
            _this.pizzas = data;
            _this.pizzasShowed = data;
            //this.sortAlphabetically();
            console.log("pizzas : ");
            console.log(_this.pizzas);
        }, function (err) { return console.log("error is " + err); }, // error
        function () { return console.log('read pizzas complete ' + _this.pizzas); } // complete
        );
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.showEditModal = function (actionType, idPizzeria, pizza) {
        var _this = this;
        if (!pizza)
            pizza = null;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__edit_pizza_edit_pizza__["a" /* EditPizzaPage */], { actionType: actionType, idPizzeria: idPizzeria, pizza: pizza });
        modal.onDidDismiss(function (newPizzaSaved) {
            if (newPizzaSaved && newPizzaSaved != null) {
                _this.addOrReplacePizza(newPizzaSaved);
                if (newPizzaSaved["oldAssociation"] && newPizzaSaved["oldAssociation"] != null)
                    _this.removePizzaFromList(newPizzaSaved, newPizzaSaved["oldAssociation"]);
            }
        });
        modal.present();
    };
    MenuPage.prototype.showInfoModal = function (idPizzeria, pizza) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__info_pizza_info_pizza__["a" /* InfoPizzaPage */], { idPizzeria: idPizzeria, pizza: pizza });
        modal.present();
    };
    MenuPage.prototype.sortAlphabetically = function () {
        this.pizzasShowed.sort(function (a, b) {
            if (a["pizzamenu"][0] && b["pizzamenu"][0]) {
                if (a["pizzamenu"][0]["name"] < b["pizzamenu"][0]["name"])
                    return -1;
                if (a["pizzamenu"][0]["name"] > b["pizzamenu"][0]["name"])
                    return 1;
            }
            return 0;
        });
    };
    MenuPage.prototype.addOrReplacePizza = function (newPizzaSaved) {
        var found = false;
        this.pizzas.forEach(function (item, index, object) {
            if (item["_id"] === newPizzaSaved["_id"]) {
                found = true;
                object[index]["pizzamenu"][0] = newPizzaSaved["pizzamenu"][0];
            }
        });
        if (!found) {
            console.log("La pizza non è stata trovata, aggiungo la nuova :");
            console.log(newPizzaSaved);
            this.pizzas.push(newPizzaSaved);
        }
    };
    MenuPage.prototype.updatePizzamenuAvailability = function (associationId, newState) {
        var _this = this;
        var data = { "associationId": associationId, "newState": newState };
        this.ws.updatePizzamenuAvailability(data).subscribe(function (data) {
            console.log(data);
            _this.showResultToast("Disponibilità pizza nel menu aggiornata");
        }, function (err) { return console.log("error is " + err); }, // error
        function () { });
    };
    MenuPage.prototype.deletePizza = function (pizza, showConfirm) {
        var _this = this;
        var idPizza = pizza["pizzamenu"][0]["_id"];
        this.ws.deletePizza(idPizza).subscribe(function (data) {
            console.log(data);
            _this.removePizzaFromList(pizza, pizza["_id"]);
        }, function (err) { return console.log("error is " + err); }, // error
        function () { if (showConfirm == true)
            _this.showResultToast("Pizza correttamente eliminata"); });
    };
    MenuPage.prototype.showResultToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    MenuPage.prototype.removePizzaFromList = function (pizza, id) {
        this.pizzas.forEach(function (item, index, object) {
            if (item["_id"] === id) {
                object.splice(index, 1);
            }
        });
    };
    MenuPage.prototype.showDeletePizzaConfirm = function (pizza) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Elimina pizza',
            message: 'Sicuro di voler eliminare la pizza ' + pizza["pizzamenu"][0]["name"] + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.deletePizza(pizza, true);
                    }
                }
            ]
        });
        confirm.present();
    };
    MenuPage.prototype.filterItems = function (ev) {
        this.pizzasShowed = this.pizzas;
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.pizzasShowed = this.pizzas.filter(function (item) {
                if (!item || !item["pizzamenu"] || !item["pizzamenu"][0])
                    return false;
                return item["pizzamenu"][0]["name"].toLowerCase().includes(val.toLowerCase());
            });
            this.pizzasShowed = this.pizzasShowed;
        }
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-menu',template:/*ion-inline-start:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\menu\menu.html"*/'<!--\n\n  Generated template for the MenuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header color="light">\n\n\n\n  <ion-navbar>\n\n    <ion-title>Menu</ion-title>\n\n      \n\n      <ion-buttons right>\n\n           <button ion-button icon-only (click)="toggleShowSearch()">\n\n               <ion-icon *ngIf="!showSearch" name="search"></ion-icon>\n\n               <ion-icon *ngIf="showSearch" color="primary" name="search"></ion-icon>\n\n           </button>\n\n    </ion-buttons>\n\n      \n\n  </ion-navbar>\n\n    <ion-searchbar *ngIf="showSearch"\n\n  placeholder="Cerca pizza"\n\n  (ionInput)="filterItems($event)">\n\n</ion-searchbar>\n\n    \n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content [ngClass]="(showSearch) ? \'margin-top\' : \'\'">\n\n\n\n    \n\n  <ion-list >\n\n\n\n  <ion-item-sliding *ngFor="let pizza of pizzasShowed">\n\n    <ion-item *ngIf="pizza.pizzamenu.length > 0">\n\n      <!--   \n\n      <ion-badge item-start>\n\n       \n\n        <ion-img width="40" height="40" src="https://previews.123rf.com/images/izakowski/izakowski1410/izakowski141000045/32318068-Cartoon-illustrazione-di-Object-italiana-Pizza-Cibo-Archivio-Fotografico.jpg"></ion-img>\n\n\n\n<img src="assets/img/pizza.jpg"/>\n\n      \n\n      \n\n          {{pizza.price | currency:\'EUR\':true:\'1.2-2\'}}\n\n      </ion-badge>\n\n-->\n\n        \n\n      <text-img [text]="pizza.price | currency:\'EUR\':true:\'1.2-2\'" item-start></text-img>\n\n        \n\n      <ion-label>{{pizza.pizzamenu[0].name}}</ion-label>\n\n\n\n     <ion-toggle color="secondary" [(ngModel)]="pizza.available" (ionChange)="updatePizzamenuAvailability(pizza[\'_id\'], pizza.available)" checked="pizza.available}}"></ion-toggle>\n\n\n\n    </ion-item>\n\n    <ion-item-options side="right">\n\n        <button ion-button color="primary" (click)="showInfoModal(idPizzeria, pizza)">\n\n        <ion-icon name="information-circle"></ion-icon>\n\n        DETTAGLIO\n\n      </button>\n\n      <button ion-button color="warn" (click)="showEditModal(\'Modifica\', idPizzeria, pizza)">\n\n        <ion-icon name="build"></ion-icon>\n\n        MODIFICA\n\n      </button>\n\n      <button ion-button color="danger"  (click)="showDeletePizzaConfirm(pizza)">\n\n        <ion-icon name="trash"></ion-icon>\n\n        ELIMINA\n\n      </button>\n\n\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  \n\n</ion-list>\n\n<br/>\n\n<br/>\n\n<br/>\n\n<br/>\n\n\n\n<ion-fab bottom right>\n\n    <button color="warn" ion-fab (click)="showEditModal(\'Aggiungi\', idPizzeria)">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\menu\menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DatiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DatiPage = (function () {
    function DatiPage(navCtrl, navParams, ws, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ws = ws;
        this.toastCtrl = toastCtrl;
        this.idPizzeria = "58e37caddcc678207cc83fc0";
        this.getPizzeriaById(this.idPizzeria);
    }
    DatiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DatiPage');
    };
    DatiPage.prototype.getPizzeriaById = function (id) {
        var _this = this;
        this.ws.getPizzeriaById(id)
            .subscribe(function (data) {
            _this.pizzeria = data;
            console.log("pizzeria : ");
            console.log(_this.pizzeria);
            _this.pizzeria["bigIncrease"] = _this.pizzeria["bigIncrease"] * 10;
            _this.pizzeria["smallReduction"] = _this.pizzeria["smallReduction"] * 10;
            _this.pizzeria["packageCost"] = _this.pizzeria["packageCost"] * 10;
            _this.pizzeria["deliveryCost"] = _this.pizzeria["deliveryCost"] * 10;
        }, function (err) { return console.log("error is " + err); }, // error
        function () { return console.log('read pizzeria complete '); } // complete
        );
    };
    DatiPage.prototype.updatePizzeria = function () {
        var _this = this;
        var p = JSON.parse(JSON.stringify(this.pizzeria));
        p["bigIncrease"] = p["bigIncrease"] / 10;
        p["smallReduction"] = p["smallReduction"] / 10;
        p["packageCost"] = p["packageCost"] / 10;
        p["deliveryCost"] = p["deliveryCost"] / 10;
        this.ws.updatePizzeria({ "updatedPizzeria": p })
            .subscribe(function (data) {
            _this.showResultToast("Dati pizzeria aggiornati correttamente");
        }, function (err) { return console.log("error is " + err); }, // error
        function () { return console.log('update pizzeria complete '); } // complete
        );
    };
    DatiPage.prototype.showResultToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    return DatiPage;
}());
DatiPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dati',template:/*ion-inline-start:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\dati\dati.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Dati</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n    <ion-row no-padding *ngIf="pizzeria">\n\n      <ion-col text-center>\n\n          <ion-item>\n\n            <ion-label floating>Nome</ion-label>\n\n            <ion-input type="text" [(ngModel)]="pizzeria.name"></ion-input>\n\n          </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <ion-row no-padding *ngIf="pizzeria">\n\n\n\n\n\n      <ion-col text-center>\n\n        <ion-item>\n\n          <ion-label floating>Telefono</ion-label>\n\n          <ion-input type="number" [(ngModel)]="pizzeria.phone"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col text-center>\n\n        <ion-item>\n\n          <ion-label floating>Città</ion-label>\n\n          <ion-input type="text" [(ngModel)]="pizzeria.where.city"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row no-padding *ngIf="pizzeria">\n\n      <ion-col text-center>\n\n        <ion-item>\n\n          <ion-label floating>Indirizzo</ion-label>\n\n          <ion-input type="text" [(ngModel)]="pizzeria.where.address"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <ion-row no-padding *ngIf="pizzeria">\n\n      <ion-col text-center>\n\n        <ion-item>\n\n          <ion-label>Apertura</ion-label>\n\n          <ion-datetime displayFormat="HH:mm" [(ngModel)]="pizzeria.when.openingTime"></ion-datetime>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col text-center>\n\n        <ion-item>\n\n          <ion-label>Chiusura</ion-label>\n\n          <ion-datetime displayFormat="HH:mm" [(ngModel)]="pizzeria.when.closingTime"></ion-datetime>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n    \n\n    \n\n    <ion-row no-padding *ngIf="pizzeria">\n\n      <ion-col text-center>\n\n        <ion-item>\n\n              <ion-label>Giorno di chiusura</ion-label>\n\n              <ion-select [(ngModel)]="pizzeria.when.closureDay">\n\n                <ion-option value="1">Lunedi</ion-option>\n\n                <ion-option value="2">Martedi</ion-option>\n\n                  <ion-option value="3">Mercoledi</ion-option>\n\n                  <ion-option value="4">Giovedi</ion-option>\n\n                  <ion-option value="5">Venerdi</ion-option>\n\n                  <ion-option value="6">Sabato</ion-option>\n\n                  <ion-option value="7">Domenica</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n    \n\n\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n  <br/>\n\n\n\n  <ion-row no-padding *ngIf="pizzeria">\n\n    <ion-col text-center>\n\n\n\n\n\n\n\n        <ion-header no-padding>\n\n\n\n\n\n  <ion-toolbar>\n\n    <ion-title>Tariffe</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n<br/><br/><br/>\n\n\n\n    <ion-row no-padding *ngIf="pizzeria">\n\n      <ion-col text-center>\n\n        Maggiorazione gigante\n\n        <ion-row no-padding>\n\n            <ion-col text-center>\n\n              <ion-badge color="danger">\n\n                <span style="font-size: 4.5rem">{{(pizzeria.bigIncrease/10) | currency:\'EUR\':true:\'1.2-2\'}}</span></ion-badge>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n\n\n\n\n\n\n            <ion-range [(ngModel)]="pizzeria.bigIncrease" max="40" step="1">\n\n              <ion-icon range-left small >0</ion-icon>\n\n              <ion-icon range-right >4</ion-icon>\n\n            </ion-range>\n\n\n\n\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row no-padding *ngIf="pizzeria">\n\n      <ion-col text-center>\n\n        Minorazione ridotta\n\n        <ion-row no-padding>\n\n            <ion-col text-center>\n\n              <ion-badge color="secondary">\n\n                <span style="font-size: 4.5rem">- {{(pizzeria.smallReduction/10) | currency:\'EUR\':true:\'1.2-2\'}}</span></ion-badge>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n\n\n\n\n\n\n            <ion-range [(ngModel)]="pizzeria.smallReduction" max="40" step="1">\n\n              <ion-icon range-left small >0</ion-icon>\n\n              <ion-icon range-right >4</ion-icon>\n\n            </ion-range>\n\n\n\n\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row no-padding *ngIf="pizzeria">\n\n      <ion-col text-center>\n\n        Costo aggiuntivo cartone\n\n        <ion-row no-padding>\n\n            <ion-col text-center>\n\n              <ion-badge color="primary">\n\n                <span style="font-size: 4.5rem">{{(pizzeria.packageCost/10) | currency:\'EUR\':true:\'1.2-2\'}}</span></ion-badge>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n\n\n\n\n\n\n            <ion-range [(ngModel)]="pizzeria.packageCost" max="40" step="1">\n\n              <ion-icon range-left small >0</ion-icon>\n\n              <ion-icon range-right >4</ion-icon>\n\n            </ion-range>\n\n\n\n\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row no-padding *ngIf="pizzeria">\n\n      <ion-col text-center>\n\n        Costo trasporto\n\n        <ion-row no-padding>\n\n            <ion-col text-center>\n\n              <ion-badge color="warn">\n\n                <span style="font-size: 4.5rem">{{(pizzeria.deliveryCost/10) | currency:\'EUR\':true:\'1.2-2\'}}</span></ion-badge>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n\n\n\n\n\n\n            <ion-range [(ngModel)]="pizzeria.deliveryCost" max="40" step="1">\n\n              <ion-icon range-left small >0</ion-icon>\n\n              <ion-icon range-right >4</ion-icon>\n\n            </ion-range>\n\n\n\n\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <ion-row no-padding *ngIf="pizzeria">\n\n      <ion-col text-center>\n\n            <button ion-button block (click)="updatePizzeria()">Salva Modifiche</button>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\dati\dati.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], DatiPage);

//# sourceMappingURL=dati.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, ws) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ws = ws;
        this.login = { "username": "", "password": "" };
        this.error = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.authenticate = function () {
        var _this = this;
        this.error = false;
        this.ws.authenticate(this.login)
            .subscribe(function (data) {
            console.log("res : ");
            console.log(data);
            if (data.success || !data.success)
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
            else {
                _this.error = false;
                _this.error = true;
            }
        }, function (err) { return console.log("error is " + err); }, // error
        function () { return console.log('authentication complete '); } // complete
        );
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\login\login.html"*/'<ion-content padding class="loginPage">\n\n\n\n\n\n\n\n\n\n\n\n    <ion-list>\n\n      <ion-item text-center>\n\n        <ion-avatar>\n\n            <ion-img height="100" width="100" src="http://www.notizie.it/wp-content/uploads/2017/07/gemma-galgani-1.png"></ion-img>\n\n\n\n        </ion-avatar>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input type="text" [(ngModel)]="login.username"></ion-input>\n\n  </ion-item>\n\n    <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" [(ngModel)]="login.password"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n\n\n\n\n  <br/>\n\n  <br/>\n\n\n\n\n\n\n\n\n\n\n\n      <ion-row no-padding>\n\n          <ion-col text-center>\n\n              <button ion-button block (click)="authenticate()">Accedi</button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n\n\n\n\n\n\n<ion-card color="danger" *ngIf="error">\n\n  <ion-card-content  text-center>\n\n      Login Errato\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dati/dati.module": [
		460,
		7
	],
	"../pages/edit-pizza/edit-pizza.module": [
		457,
		6
	],
	"../pages/info-order/info-order.module": [
		455,
		5
	],
	"../pages/info-pizza/info-pizza.module": [
		458,
		4
	],
	"../pages/login/login.module": [
		461,
		3
	],
	"../pages/menu/menu.module": [
		459,
		2
	],
	"../pages/order-info-popover/order-info-popover.module": [
		454,
		1
	],
	"../pages/orders/orders.module": [
		456,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orders_orders__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dati_dati__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__orders_orders__["a" /* OrdersPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__dati_dati__["a" /* DatiPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Ordini" tabIcon="list-box"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Menu" tabIcon="restaurant"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Dati" tabIcon="home"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http, requestOptions) {
        this.http = http;
        this.requestOptions = requestOptions;
        this.apiBaseUrl = 'api/';
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.options.headers = new Headers();
        this.options.headers.append('Content-Type', 'application/json');
    }
    RestProvider.prototype.getOrdersByPizzeria = function (name) {
        return this.http.get(this.apiBaseUrl + 'getOrdersByPizzeria' + name)
            .map(function (res) { return res.json(); });
    };
    RestProvider.prototype.getMenuByPizzeria = function (name) {
        return this.http.get(this.apiBaseUrl + 'getMenupizzeriaByPizzeria' + name)
            .map(function (res) { return res.json(); });
    };
    RestProvider.prototype.getPizzeriaById = function (id) {
        return this.http.get(this.apiBaseUrl + 'getPizzeriaById' + id)
            .map(function (res) { return res.json(); });
    };
    RestProvider.prototype.getPizzeriaByName = function (name) {
        return this.http.get(this.apiBaseUrl + 'getPizzeriaByName' + name)
            .map(function (res) { return res.json(); });
    };
    RestProvider.prototype.updateOrderState = function (data) {
        return this.http.post(this.apiBaseUrl + 'updateOrderState', data, this.options)
            .map(function (res) { return res.json(); });
    };
    RestProvider.prototype.updatePizzamenuAvailability = function (data) {
        return this.http.post(this.apiBaseUrl + 'updatePizzamenuAvailability', data, this.options)
            .map(function (res) { return res.json(); });
    };
    RestProvider.prototype.updatePizzeria = function (data) {
        return this.http.post(this.apiBaseUrl + 'updatePizzeria', data, this.options)
            .map(function (res) { return res.json(); });
    };
    RestProvider.prototype.deleteFromMenu = function (ida) {
        return this.http.delete(this.apiBaseUrl + 'deleteFromMenu' + ida)
            .map(function (res) { return res.json(); });
    };
    RestProvider.prototype.deletePizza = function (idPizza) {
        return this.http.delete(this.apiBaseUrl + 'deletePizza' + idPizza)
            .map(function (res) { return res.json(); });
    };
    RestProvider.prototype.addPizza = function (data) {
        return this.http.post(this.apiBaseUrl + 'addPizza', data, this.options)
            .map(function (res) { return res.json(); });
    };
    RestProvider.prototype.addPizzaToMenuPizzeria = function (data) {
        return this.http.post(this.apiBaseUrl + 'addPizzaToMenuPizzeria', data, this.options)
            .map(function (res) { return res.json(); });
    };
    RestProvider.prototype.authenticate = function (data) {
        return this.http.post(this.apiBaseUrl + 'authenticate', data, this.options)
            .map(function (res) { return res.json(); });
    };
    return RestProvider;
}());
RestProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]])
], RestProvider);

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_orders_orders__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dati_dati__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_pizza_edit_pizza__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_info_pizza_info_pizza__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_info_order_info_order__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_order_info_popover_order_info_popover__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_rest_rest__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_moment__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_speech_recognition__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_text_img_text_img__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_orders_orders__["a" /* OrdersPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_dati_dati__["a" /* DatiPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_edit_pizza_edit_pizza__["a" /* EditPizzaPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_info_pizza_info_pizza__["a" /* InfoPizzaPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_info_order_info_order__["a" /* InfoOrderPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_order_info_popover_order_info_popover__["a" /* OrderInfoPopoverPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__directives_text_img_text_img__["a" /* TextImg */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/order-info-popover/order-info-popover.module#OrderInfoPopoverPageModule', name: 'OrderInfoPopoverPage', segment: 'order-info-popover', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/info-order/info-order.module#InfoOrderPageModule', name: 'InfoOrderPage', segment: 'info-order', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-pizza/edit-pizza.module#EditPizzaPageModule', name: 'EditPizzaPage', segment: 'edit-pizza', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/info-pizza/info-pizza.module#InfoPizzaPageModule', name: 'InfoPizzaPage', segment: 'info-pizza', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dati/dati.module#DatiPageModule', name: 'DatiPage', segment: 'dati', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_17_angular2_moment__["MomentModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_orders_orders__["a" /* OrdersPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_dati_dati__["a" /* DatiPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_edit_pizza_edit_pizza__["a" /* EditPizzaPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_info_pizza_info_pizza__["a" /* InfoPizzaPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_info_order_info_order__["a" /* InfoOrderPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_order_info_popover_order_info_popover__["a" /* OrderInfoPopoverPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_speech_recognition__["a" /* SpeechRecognition */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 182,
	"./af.js": 182,
	"./ar": 183,
	"./ar-dz": 184,
	"./ar-dz.js": 184,
	"./ar-kw": 185,
	"./ar-kw.js": 185,
	"./ar-ly": 186,
	"./ar-ly.js": 186,
	"./ar-ma": 187,
	"./ar-ma.js": 187,
	"./ar-sa": 188,
	"./ar-sa.js": 188,
	"./ar-tn": 189,
	"./ar-tn.js": 189,
	"./ar.js": 183,
	"./az": 190,
	"./az.js": 190,
	"./be": 191,
	"./be.js": 191,
	"./bg": 192,
	"./bg.js": 192,
	"./bm": 193,
	"./bm.js": 193,
	"./bn": 194,
	"./bn.js": 194,
	"./bo": 195,
	"./bo.js": 195,
	"./br": 196,
	"./br.js": 196,
	"./bs": 197,
	"./bs.js": 197,
	"./ca": 198,
	"./ca.js": 198,
	"./cs": 199,
	"./cs.js": 199,
	"./cv": 200,
	"./cv.js": 200,
	"./cy": 201,
	"./cy.js": 201,
	"./da": 202,
	"./da.js": 202,
	"./de": 203,
	"./de-at": 204,
	"./de-at.js": 204,
	"./de-ch": 205,
	"./de-ch.js": 205,
	"./de.js": 203,
	"./dv": 206,
	"./dv.js": 206,
	"./el": 207,
	"./el.js": 207,
	"./en-au": 208,
	"./en-au.js": 208,
	"./en-ca": 209,
	"./en-ca.js": 209,
	"./en-gb": 210,
	"./en-gb.js": 210,
	"./en-ie": 211,
	"./en-ie.js": 211,
	"./en-nz": 212,
	"./en-nz.js": 212,
	"./eo": 213,
	"./eo.js": 213,
	"./es": 214,
	"./es-do": 215,
	"./es-do.js": 215,
	"./es-us": 216,
	"./es-us.js": 216,
	"./es.js": 214,
	"./et": 217,
	"./et.js": 217,
	"./eu": 218,
	"./eu.js": 218,
	"./fa": 219,
	"./fa.js": 219,
	"./fi": 220,
	"./fi.js": 220,
	"./fo": 221,
	"./fo.js": 221,
	"./fr": 222,
	"./fr-ca": 223,
	"./fr-ca.js": 223,
	"./fr-ch": 224,
	"./fr-ch.js": 224,
	"./fr.js": 222,
	"./fy": 225,
	"./fy.js": 225,
	"./gd": 226,
	"./gd.js": 226,
	"./gl": 227,
	"./gl.js": 227,
	"./gom-latn": 228,
	"./gom-latn.js": 228,
	"./gu": 229,
	"./gu.js": 229,
	"./he": 230,
	"./he.js": 230,
	"./hi": 231,
	"./hi.js": 231,
	"./hr": 232,
	"./hr.js": 232,
	"./hu": 233,
	"./hu.js": 233,
	"./hy-am": 234,
	"./hy-am.js": 234,
	"./id": 235,
	"./id.js": 235,
	"./is": 236,
	"./is.js": 236,
	"./it": 237,
	"./it.js": 237,
	"./ja": 238,
	"./ja.js": 238,
	"./jv": 239,
	"./jv.js": 239,
	"./ka": 240,
	"./ka.js": 240,
	"./kk": 241,
	"./kk.js": 241,
	"./km": 242,
	"./km.js": 242,
	"./kn": 243,
	"./kn.js": 243,
	"./ko": 244,
	"./ko.js": 244,
	"./ky": 245,
	"./ky.js": 245,
	"./lb": 246,
	"./lb.js": 246,
	"./lo": 247,
	"./lo.js": 247,
	"./lt": 248,
	"./lt.js": 248,
	"./lv": 249,
	"./lv.js": 249,
	"./me": 250,
	"./me.js": 250,
	"./mi": 251,
	"./mi.js": 251,
	"./mk": 252,
	"./mk.js": 252,
	"./ml": 253,
	"./ml.js": 253,
	"./mr": 254,
	"./mr.js": 254,
	"./ms": 255,
	"./ms-my": 256,
	"./ms-my.js": 256,
	"./ms.js": 255,
	"./mt": 257,
	"./mt.js": 257,
	"./my": 258,
	"./my.js": 258,
	"./nb": 259,
	"./nb.js": 259,
	"./ne": 260,
	"./ne.js": 260,
	"./nl": 261,
	"./nl-be": 262,
	"./nl-be.js": 262,
	"./nl.js": 261,
	"./nn": 263,
	"./nn.js": 263,
	"./pa-in": 264,
	"./pa-in.js": 264,
	"./pl": 265,
	"./pl.js": 265,
	"./pt": 266,
	"./pt-br": 267,
	"./pt-br.js": 267,
	"./pt.js": 266,
	"./ro": 268,
	"./ro.js": 268,
	"./ru": 269,
	"./ru.js": 269,
	"./sd": 270,
	"./sd.js": 270,
	"./se": 271,
	"./se.js": 271,
	"./si": 272,
	"./si.js": 272,
	"./sk": 273,
	"./sk.js": 273,
	"./sl": 274,
	"./sl.js": 274,
	"./sq": 275,
	"./sq.js": 275,
	"./sr": 276,
	"./sr-cyrl": 277,
	"./sr-cyrl.js": 277,
	"./sr.js": 276,
	"./ss": 278,
	"./ss.js": 278,
	"./sv": 279,
	"./sv.js": 279,
	"./sw": 280,
	"./sw.js": 280,
	"./ta": 281,
	"./ta.js": 281,
	"./te": 282,
	"./te.js": 282,
	"./tet": 283,
	"./tet.js": 283,
	"./th": 284,
	"./th.js": 284,
	"./tl-ph": 285,
	"./tl-ph.js": 285,
	"./tlh": 286,
	"./tlh.js": 286,
	"./tr": 287,
	"./tr.js": 287,
	"./tzl": 288,
	"./tzl.js": 288,
	"./tzm": 289,
	"./tzm-latn": 290,
	"./tzm-latn.js": 290,
	"./tzm.js": 289,
	"./uk": 291,
	"./uk.js": 291,
	"./ur": 292,
	"./ur.js": 292,
	"./uz": 293,
	"./uz-latn": 294,
	"./uz-latn.js": 294,
	"./uz.js": 293,
	"./vi": 295,
	"./vi.js": 295,
	"./x-pseudo": 296,
	"./x-pseudo.js": 296,
	"./yo": 297,
	"./yo.js": 297,
	"./zh-cn": 298,
	"./zh-cn.js": 298,
	"./zh-hk": 299,
	"./zh-hk.js": 299,
	"./zh-tw": 300,
	"./zh-tw.js": 300
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 422;

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\DANIELE-PC\prvt\pzp\pizzappe\public\pizzap\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextImg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_generator__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextImg = (function () {
    function TextImg(element, colorGenerator) {
        this.element = element;
        this.colorGenerator = colorGenerator;
    }
    Object.defineProperty(TextImg.prototype, "text", {
        set: function (txt) {
            this.element.nativeElement.style.backgroundColor = this.colorGenerator.getColor(txt);
            this.element.nativeElement.setAttribute("value", txt);
        },
        enumerable: true,
        configurable: true
    });
    return TextImg;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TextImg.prototype, "text", null);
TextImg = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'text-img',
        providers: [__WEBPACK_IMPORTED_MODULE_1__color_generator__["a" /* ColorGenerator */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__color_generator__["a" /* ColorGenerator */]])
], TextImg);

//# sourceMappingURL=text-img.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorGenerator; });
var ColorGenerator = (function () {
    function ColorGenerator() {
        this.COLORS = ['#e57373', '#f06292', '#ba68c8', '#9575cd', '#7986cb', '#64b5f6',
            '#4fc3f7', '#4dd0e1', '#4db6ac', '#81c784', '#aed581', '#ff8a65', '#d4e157', '#673ab7',
            '#ffb74d', '#a1887f', '#90a4ae'];
    }
    ColorGenerator.prototype.getColor = function (str) {
        return this.COLORS[Math.abs(this.generateHashCode(str)) % this.COLORS.length];
    };
    ColorGenerator.prototype.generateHashCode = function (str) {
        var h = 0;
        if (str.length > 0) {
            for (var i = 0; i < str.length; i++) {
                h = 31 * h + str.charCodeAt(i);
                h |= 0; // Convert to 32bit integer
            }
        }
        return h;
    };
    ;
    return ColorGenerator;
}());

//# sourceMappingURL=color-generator.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map