import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-listado-clientes',
  templateUrl: 'listado-clientes.html',
})
export class ListadoClientesPage {

  clientes:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient,
              public modal: ModalController) {
  }

  ionViewDidLoad() {
    this.cargarClientes();
  }

  cargarClientes(){
    this.http.get('http://localhost:3000/clientes')
              .map((resp:any)=>{
                return resp;
              })
              .subscribe((resp:any)=>{
                this.clientes = resp.clientes;
              },(error)=>{
                console.log(error);
              })
  }

  crearCliente(){
    let modal = this.modal.create('CrearClientePage') //esto crea una página modal, avmos a generar la misma página que acabamos de hacer
    
    // modal.onDidDismiss(cliente=>{
    //   if(cliente){
    //     this.clientes.push(cliente);
    //   }
    // })
    modal.onDidDismiss(()=>{
      this.cargarClientes();
    })
    modal.present();
  }

  verCliente(cliente){
    //le vamos a pasar un objeto que se llama cliente, que le pasaremos un parámetro que se llama cliente
    //que es el cliente que hay entre los paréntesis de la línea 51
    this.navCtrl.push('VerClientePage', {cliente: cliente})
  }

  editarCliente(cliente){
    this.navCtrl.push('EditarClientePage', {cliente: cliente})
  }

  eliminarCliente(id){
    this.http.delete('http://localhost:3000/clientes/' + id)
                    .subscribe((resp:any)=>{
                      this.cargarClientes();
                    },(error)=>{
                      console.log(error);
                    })
  }

}
