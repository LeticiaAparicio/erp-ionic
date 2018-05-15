import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearFacturaPage } from './crear-factura';

@NgModule({
  declarations: [
    CrearFacturaPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearFacturaPage),
  ],
})
export class CrearFacturaPageModule {}
