import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from './models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private products: ProductModel[] = [];
  // private productosFiltrados: ProductModel[] = [];
  constructor(private http:HttpClient) {}

  getProductos(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`http://localhost:3000/productos`)
  }

 /*  getFilteredProducts(animal: string): ProductModel[] {
    return this.products.filter(product => product.tipo_animal === animal);
  }

  setProductosFiltrados(productos: ProductModel[]): void {
    this.productosFiltrados = productos;
  }

  getProductosFiltrados(): ProductModel[] {
    return this.productosFiltrados;
  }

  filtrarProductosPorAnimal(animal: string): ProductModel[] {
    // Lógica para filtrar los productos según el animal
    const productosFiltrados = this.products.filter(producto => producto.tipo_animal === animal);
    return this.productosFiltrados = productosFiltrados;
  } */
}