import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { ProveedorI } from 'src/app/models/ProveedorI';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { MatSnackBar} from '@angular/material/snack-bar'; 


@Component({
  selector: 'app-create-proveedor',
  templateUrl: './create-proveedor.component.html',
  styleUrls: ['./create-proveedor.component.css']
})
export class CreateProveedorComponent implements OnInit {
  public formulario: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    direccion: ['', Validators.required],
    provincia: ['', Validators.required],
    telefono: ['', Validators.required]
  }) 

  constructor(
    private formBuilder: FormBuilder,
    private proveedorService: ProveedorService,
    private snackBar: MatSnackBar,
    private roter: Router
  ) { }

  ngOnInit(): void {

    
  }

  onSubmit(): void{
    const formValue: ProveedorI = this.formulario.value;
    this.proveedorService.create(formValue).subscribe(
      () => {
        this.snackBar.open(
          'proveedor Creado ', 'ok', {
            duration: 5000,
          }
        );
        this.roter.navigateByUrl('proveedor');
      },
      err => {
        this.snackBar.open(
          'no se creó', 'ok',{
            duration: 5000,
          }
        )
      }
    )

  }

}
