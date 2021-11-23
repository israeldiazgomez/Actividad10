import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductoComponent } from './components/producto/create-producto/create-producto.component';
import { ShowProductoComponent } from './components/producto/show-producto/show-producto.component';

const routes: Routes = [{
  path: "producto",
  component: ShowProductoComponent
  },
  {
    path: "crearProducto",
    component: CreateProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
