import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layouts/nav/nav.component';
import { ShowProductoComponent } from './components/producto/show-producto/show-producto.component';
import { CreateProductoComponent } from './components/producto/create-producto/create-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from  '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductoService } from './services/producto.service';
import { ShowClienteComponent } from './components/cliente/show-cliente/show-cliente.component';
import { CreateClienteComponent } from './components/cliente/create-cliente/create-cliente.component';
import { ClienteService } from './services/cliente.service';
import { ShowProveedorComponent } from './components/proveedor/show-proveedor/show-proveedor.component';
import { CreateProveedorComponent } from './components/proveedor/create-proveedor/create-proveedor.component';
import { ProveedorService } from './services/proveedor.service';
import { ShowIndexComponent } from './components/index/show-index/show-index.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShowProductoComponent,
    CreateProductoComponent,
    ShowClienteComponent,
    CreateClienteComponent,
    ShowProveedorComponent,
    CreateProveedorComponent,
    ShowIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProductoService,
    ClienteService,
    ProveedorService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
