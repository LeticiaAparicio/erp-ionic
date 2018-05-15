import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-ver-articulo',
  templateUrl: 'ver-articulo.html',
})
export class VerArticuloPage {

  articulo:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
                this.articulo = navParams.get('articulo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerArticuloPage');
  }

}
