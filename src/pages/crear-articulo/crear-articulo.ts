import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-crear-articulo',
  templateUrl: 'crear-articulo.html',
})
export class CrearArticuloPage {

  articulo:any = {
    referencia: null,
    precio: null
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient,
              public viewController: ViewController) {
  }

  ionViewDidLoad() {
  }

  crearArticulo(){
    let articulo = {
      referencia: this.articulo.referencia,
      precio: this.articulo.precio
    }
    this.http.post('http://localhost:3000/articulo', articulo) 
            .subscribe(()=>{
              // this.viewController.dismiss(cliente)
              this.viewController.dismiss();
            },(error)=>{
              console.log(error);
            })
  }

  cancelar(){
    this.viewController.dismiss();
  }

}
