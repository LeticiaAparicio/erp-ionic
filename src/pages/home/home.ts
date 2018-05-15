import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // mensaje:string = '¡Hola Mundo';

  constructor(public navCtrl: NavController) {

  }

  goToVentas(){
    this.navCtrl.push('VentasPage'); //con push añadimos una página nueva y le decimos el nombre de la clase del componente de esa página.
  }

  goToCompras(){
    this.navCtrl.push('ComprasPage');
  }

}
