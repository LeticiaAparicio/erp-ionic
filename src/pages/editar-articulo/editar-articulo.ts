import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-editar-articulo',
  templateUrl: 'editar-articulo.html',
})
export class EditarArticuloPage {

  articulo:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient,
              public viewController: ViewController) {
                this.articulo = navParams.get('articulo');
  }

  modificarArticulo(){
    let articulo = {
      id: this.articulo._id,
      referencia: this.articulo.referencia,
      precio: this.articulo.precio
    }
    this.http.put('http://localhost:3000/articulo/' + articulo.id, articulo)
                  .subscribe((resp:any)=>{
                    this.viewController.dismiss();
                  },(error)=>{
                    console.log(error);
                  })
  }
  
  cancelar(){
    this.viewController.dismiss();
  }

}
