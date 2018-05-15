import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-listado-proveedores',
  templateUrl: 'listado-proveedores.html',
})
export class ListadoProveedoresPage {

  proveedores:any;
  desde:number;
  totales:number;
  botones:number[] = [];
  numeroBotones:number;
  tramoBotones:number = 0;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient,
              public modal: ModalController) {
  }

  ionViewDidLoad() {
    this.cargarProveedores();
  }

  cargarProveedores(){
    this.http.get('http://localhost:3000/proveedor?desde=' + this.desde) 
              .map((resp:any)=>{
                return resp;
              })
              .subscribe((resp:any)=>{
                this.proveedores = resp.proveedores;
                this.totales = resp.totales;
                this.numeroBotones = this.totales / 5;
                this.botones = [];
                var i;
                for(i = this.tramoBotones; i < this.tramoBotones + 5; i++){
                  this.botones.push(i+1);
                }
              },(error)=>{
                console.log(error);
              })
  }

  setDesde(valor){
    var desde = this.desde + valor;
    if(desde >= this.totales){
      return;
    } else if(desde < 0) {
      return;
    } else {
      this.desde += valor;
      this.cargarProveedores();
    }
  }

  updateDesde(valor){
    this.desde = valor;
    this.cargarProveedores();
  }

  avanzarBotones(){
    if(this.desde % 25 === 0){  
      this.tramoBotones += 5;
      var i;
      for(i = this.tramoBotones; i < this.tramoBotones + 5; i++){
        this.botones.push(i+1);
      }
    }
  }

  retrocederBotones(){
    if((this.desde + 5) % 25 === 0){  
      this.botones = [];
      this.tramoBotones -= 5;
      var i;
      for(i = this.tramoBotones; i < this.tramoBotones + 5; i++){
        this.botones.push(i+1);
      }
    }
  }

  avanzarTramoBotones(){
    this.tramoBotones += 5;
    
    this.desde = this.tramoBotones * 5;
    this.cargarProveedores();
  }

  retrocederTramoBotones(){
    this.tramoBotones -= 5;
    this.desde = this.tramoBotones * 5;
    this.cargarProveedores();
  }

  crearProveedor(){
    let modal = this.modal.create('CrearProveedorPage') 
  
    modal.onDidDismiss(()=>{
      this.cargarProveedores();
    })
    modal.present();
  }

  verProveedor(proveedor){
    this.navCtrl.push('VerProveedorPage', {proveedor: proveedor})
  }

  editarProveedor(proveedor){
    this.navCtrl.push('EditarProveedorPage', {proveedor: proveedor})
  }

  eliminarProveedor(id){
    this.http.delete('http://localhost:3000/proveedor/' + id)
                    .subscribe((resp:any)=>{
                      this.cargarProveedores();
                    },(error)=>{
                      console.log(error);
                    })
  }
}
