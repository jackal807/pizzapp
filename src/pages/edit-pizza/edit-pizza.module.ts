import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPizzaPage } from './edit-pizza';

@NgModule({
  declarations: [
    EditPizzaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPizzaPage),
  ],
})
export class EditPizzaPageModule {}
