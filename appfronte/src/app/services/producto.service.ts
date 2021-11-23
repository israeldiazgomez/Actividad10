import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoI } from '../models/ProductoI';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  api_url = 'http://localhost:5000';
  base_path = `${this.api_url}/producto`
  constructor(
    private http: HttpClient
  ) { }
  getAll(): Observable<ProductoI[]>{
    return this.http.get<ProductoI[]>(this.base_path)
  }
  create(data: ProductoI): Observable<ProductoI>{
    return this.http.post<ProductoI>(this.base_path, data)
  } 
}
