import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarFacturaPage } from './editar-factura';

@NgModule({
  declarations: [
    EditarFacturaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarFacturaPage),
  ],
})
export class EditarFacturaPageModule {}
