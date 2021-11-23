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

  constructor() { }

  ngOnInit(): void {
  }

}
