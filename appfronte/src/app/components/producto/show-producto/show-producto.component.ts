import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoI } from 'src/app/models/ProductoI';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-producto',
  templateUrl: './show-producto.component.html',
  styleUrls: ['./show-producto.component.css']
})
export class ShowProductoComponent implements OnInit {
  public Productos: ProductoI[] = []
  public displayedColumns: string[] = ["id", "fecha", "descripcion"]

  constructor(
    private ProductoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarProducto()
  }
  mostrarProducto() {
    this.ProductoService.getAll() 
    .subscribe({
      next: (data) => {
        this.Productos = data
         console.log(data)
      }
    })
  }

}
