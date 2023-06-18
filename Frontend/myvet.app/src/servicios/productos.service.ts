import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../app/models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private products: ProductModel[] = [];
  private carrito: ProductModel[] = [];
  private cantidadProductos: number = 0;
  favoritos: ProductModel[] = []


  // private productosFiltrados: ProductModel[] = [];

  constructor(private http:HttpClient) {
  
  const favs = localStorage.getItem('favoritos')
  this.favoritos = favs ? JSON.parse(favs) : []
  }

  getProductos(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`http://localhost:3000/productos`)
  }

  agregarAlCarrito(producto: ProductModel): void {
    this.carrito.push(producto);
  }

  obtenerCarrito(): ProductModel[] {
    return this.carrito;
  }

  obtenerCantidadProductos(): number {
    return this.cantidadProductos;
  }

  actualizarCantidadProductos(): void {
    this.cantidadProductos = this.carrito.length;
  }

  vaciarCarrito(): void {
    this.carrito = [];
  }

/*   calcularPrecioTotal(): number {
    let total = 0;
    for (const producto of this.carrito) {
      total += producto.precio * producto.cantidad;
    }
    return total;
  } */

  guardarFavs(): void {
    localStorage.setItem('favoritos',JSON.stringify(this.favoritos))
  }

  traerFavs(): void {
    const favs = localStorage.getItem('favoritos')
    this.favoritos = favs ? JSON.parse(favs) : []
  }

  agregarFavs(prod: ProductModel): void {
    this.traerFavs()
    this.favoritos.push(prod)
    this.guardarFavs()
    return
  }

  quitarFavs(prod: ProductModel): void {
    this.traerFavs()
  
    const index = this.favoritos.findIndex(el => el.id === prod.id);
      if (index !== -1) {
        this.favoritos.splice(index, 1);
        console.log('Producto eliminado de favoritos:', prod);
      }
    this.guardarFavs()
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