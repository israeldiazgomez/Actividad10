import { Component, OnInit } from '@angular/core';
import { ClienteI } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-cliente',
  templateUrl: './show-cliente.component.html',
  styleUrls: ['./show-cliente.component.css']
})
export class ShowClienteComponent implements OnInit {

  clientes: ClienteI[] = []
  public displayedColumns: string[] = ["id", "name","apellido","correo"]
  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarCliente()
  }

  mostrarCliente(){
    this.clienteService.getAll().subscribe({
      next: (data) => {
        this.clientes = data
        console.log(data)
      }
    })
  }
}

