import { Component } from '@angular/core';


import { OrdersPage } from '../orders/orders';
import { MenuPage } from '../menu/menu';
import { DatiPage } from '../dati/dati';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OrdersPage;
  tab2Root = MenuPage;
  tab3Root = DatiPage;

  constructor() {

  }
}
