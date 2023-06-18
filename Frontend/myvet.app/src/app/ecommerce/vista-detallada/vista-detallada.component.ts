import { Component, OnInit } from '@angular/core';
import { DetalleProductoService } from 'src/servicios/detalle-producto.service';
import { ProductModel } from 'src/app/models/productos.model';
import { Router } from '@angular/router';
import { ProductosService } from 'src/servicios/productos.service';

@Component({
  selector: 'app-vista-detallada',
  templateUrl: './vista-detallada.component.html',
  styleUrls: ['./vista-detallada.component.css']
})
export class VistaDetalladaComponent implements OnInit{

constructor(private dp: DetalleProductoService, private productosService: ProductosService, private router: Router) {}

objetoProducto!: ProductModel;

ngOnInit(): void {
  this.objetoProducto = this.dp.getDetail()
}

volver(): void {
this.router.navigate(['/petshop'])
}

agregarAlCarrito(): void {
  const producto = {
    titulo: this.objetoProducto.nombre_producto,
    imagen: this.objetoProducto.imagen_url,
    cantidad: 1,
    precio: this.objetoProducto.precio
  };
  this.productosService.agregarAlCarrito(this.objetoProducto);
}

}
