import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClienteI } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {
  public formulario: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    correo: ['', Validators.required],
    clave: ['', Validators.required]
  })
  constructor(
    private formBuilder: FormBuilder,
    private clienteservice: ClienteService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const formValue: ClienteI = this.formulario.value;
    this.clienteservice.create(formValue).subscribe(
      () => {
        this.snackBar.open(
          'Reguistro creado', 'OK',{
            duration:5000,
          }
        );
        this.router.navigateByUrl('/users')
      },
      err => {
        this.snackBar.open(
          'No fue creada', 'Error',{
            duration:9000,
          }
        )
      }
    )
  }

}
