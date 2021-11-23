import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClienteComponent } from './components/cliente/create-cliente/create-cliente.component';
import { ShowClienteComponent } from './components/cliente/show-cliente/show-cliente.component';
import { CreateProductoComponent } from './components/producto/create-producto/create-producto.component';
import { ShowProductoComponent } from './components/producto/show-producto/show-producto.component';
import { CreateProveedorComponent } from './components/proveedor/create-proveedor/create-proveedor.component';
import { ShowProveedorComponent } from './components/proveedor/show-proveedor/show-proveedor.component';

const routes: Routes = [{
  path: "producto",
  component: ShowProductoComponent
  },
  {
    path: "crearProducto",
    component: CreateProductoComponent
  },
  {
		path: "users",
		component: ShowClienteComponent
	},
  {
		path: "crearUsers",
		component: CreateClienteComponent
	},

  {
   
    path: "proveedor",
    component: ShowProveedorComponent
  
  
  },
     {
  
      path: "crearproveedor",
      component: CreateProveedorComponent
     },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
