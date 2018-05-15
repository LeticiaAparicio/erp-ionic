import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-editar-proveedor',
  templateUrl: 'editar-proveedor.html',
})
export class EditarProveedorPage {

  proveedor:any;

  provincias:string[] = [
    'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona','Burgos','Cáceres',
    'Cádiz','Cantabria','Castellón','Ceuta','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Gibraltar','Granada','Guadalajara',
    'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Melilla','Murcia','Navarra',
    'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
    'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'
  ]

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient,
              public viewController: ViewController) {
                this.proveedor = navParams.get('proveedor');
  }
  modificarProveedor(){

    let proveedor = {
      id: this.proveedor._id,
      nombre: this.proveedor.nombre,
      cif: this.proveedor.cif,
      domicilio: this.proveedor.domicilio,
      cp: this.proveedor.cp,
      localidad: this.proveedor.localidad,
      provincia: this.proveedor.provincia,
      telefono: this.proveedor.telefono,
      email: this.proveedor.email,
      contacto: this.proveedor.contacto
    }

    this.http.put('http://localhost:3000/proveedor/' + proveedor.id, proveedor)
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
