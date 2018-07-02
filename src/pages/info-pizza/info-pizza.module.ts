import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoPizzaPage } from './info-pizza';

@NgModule({
  declarations: [
    InfoPizzaPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoPizzaPage),
  ],
})
export class InfoPizzaPageModule {}
