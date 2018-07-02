import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderInfoPopoverPage } from './order-info-popover';

@NgModule({
  declarations: [
    OrderInfoPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderInfoPopoverPage),
  ],
})
export class OrderInfoPopoverPageModule {}
