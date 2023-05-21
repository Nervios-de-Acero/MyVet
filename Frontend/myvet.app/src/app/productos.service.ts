import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from './models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) {}

  getProductos(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`http://localhost:3000/productos`)
  }
}