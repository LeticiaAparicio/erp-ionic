import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadoFacturasPage } from './listado-facturas';

@NgModule({
  declarations: [
    ListadoFacturasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadoFacturasPage),
  ],
})
export class ListadoFacturasPageModule {}
