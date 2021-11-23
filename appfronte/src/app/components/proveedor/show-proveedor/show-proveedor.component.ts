import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedorI } from 'src/app/models/ProveedorI';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-show-proveedor',
  templateUrl: './show-proveedor.component.html',
  styleUrls: ['./show-proveedor.component.css']
})
export class ShowProveedorComponent implements OnInit {
  public proveedores: ProveedorI[] = []
  public displayedColumns: string[] = ["id", "nombre", "apellido", "direccion", "provincia", "telefono"]

  constructor(
    private proveedorService: ProveedorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarProveedor();
  }
  mostrarProveedor() {
    this.proveedorService.getAll().subscribe({
      next: (data) => {
        this.proveedores = data
        console.log(data)
      }
    })
  }
  

}
