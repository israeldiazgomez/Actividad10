import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteI } from '../models/Cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  api_url = 'http://localhost:5000'
  base_path = `${this.api_url}/clientes`

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<ClienteI[]>{
    return this.http.get<ClienteI[]>(this.base_path)
  }
  public create(data: ClienteI): Observable<ClienteI>{
    return this.http.post<ClienteI>(this.base_path, data)
  }
  
}