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
  agregado: boolean = false

  // private productosFiltrados: ProductModel[] = [];

  constructor(private http:HttpClient) {
  
  const favs = localStorage.getItem('favoritos')
  this.favoritos = favs ? JSON.parse(favs) : []

  const added = localStorage.getItem('agregado')
  this.agregado = added ? JSON.parse(added) : false
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
    const id = prod.id
    this.traerFavs()

    if(this.agregado === true){
      this.quitarFavs(prod);
      this.agregado = false;
      console.log('cambió this.favoritos a ', this.favoritos)
      localStorage.setItem('agregado', JSON.stringify(this.agregado))
      return;
    }
    
    const agregado = this.favoritos.filter(el => el.id === id)
    if(!agregado) {
      this.favoritos.push(prod)
      this.guardarFavs()
      console.log('cambió this.favoritos a ', this.favoritos)
      this.agregado = true
      return
    }
    else this.agregado = false
  }

  quitarFavs(prod: ProductModel): void {
    this.traerFavs()
    
    const index = this.favoritos.findIndex(el => el.id === prod.id);
    
    
      if (index !== -1) {
        this.favoritos.splice(index, 1);
        console.log('Producto eliminado de favoritos:', prod);
      }
    
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