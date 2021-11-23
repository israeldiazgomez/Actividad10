import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowClienteComponent } from './components/cliente/show-cliente/show-cliente.component';
import { CreateProductoComponent } from './components/producto/create-producto/create-producto.component';
import { ShowProductoComponent } from './components/producto/show-producto/show-producto.component';

const routes: Routes = [{
  path: "producto",
  component: ShowProductoComponent
  },
  {
    path: "crearProducto",
    component: CreateProductoComponent
  },
  {
		path: "cliente",
		component: ShowClienteComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
