import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/productos.model';
import { ProductosService } from '../../../servicios/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  quantity: number = 0;
  productosSeleccionados: ProductModel[] = [];
  contieneProducto: boolean = false;
  productosEnCarrito: ProductModel[] = [];

  constructor(public productosService: ProductosService) {}
  
  ngOnInit(): void {
    
    this.obtenerProductosEnCarrito();
  }

  obtenerProductosEnCarrito(): void {
    this.productosEnCarrito = this.productosService.obtenerCarrito();
    this.verificarProductosEnCarrito();
  }

  verificarProductosEnCarrito(): void {
    this.contieneProducto = this.productosEnCarrito.length > 0;
    console.log('contieneProducto:', this.contieneProducto);
  }


  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  eliminarProducto(producto: ProductModel): void {
    const indice = this.productosService.obtenerCarrito().indexOf(producto);
    if (indice !== -1) {
      this.productosService.obtenerCarrito().splice(indice, 1);
    }

    // Llamar al método para actualizar la cantidad de productos en el navbar
    this.productosService.actualizarCantidadProductos();
    this.verificarProductosEnCarrito();
  }
}
