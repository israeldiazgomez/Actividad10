import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProveedorI } from '../models/ProveedorI';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
   api_url= 'http://localhost:5000';
    base_path = `${this.api_url}/proveedor`
  

  constructor(
    private http: HttpClient
  ) { }
  getAll(): Observable<ProveedorI[]>{
    return this.http.get<ProveedorI[]>(this.base_path)
  
}
}