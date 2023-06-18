import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DetalleProductoService } from 'src/servicios/detalle-producto.service';
import { ProductModel } from 'src/app/models/productos.model';
import { Router } from '@angular/router';
import { ProductosService } from 'src/servicios/productos.service';

@Component({
  selector: 'app-vista-detallada',
  templateUrl: './vista-detallada.component.html',
  styleUrls: ['./vista-detallada.component.css']
})
export class VistaDetalladaComponent implements OnInit, OnChanges{

  constructor(private dp: DetalleProductoService, private router: Router, private ps: ProductosService) {
    const added = localStorage.getItem('agregado')
    this.agregado = added ? JSON.parse(added) : false
    }

objetoProducto!: ProductModel;
agregado: boolean = false;

ngOnInit(): void {
  this.objetoProducto = this.dp.getDetail()
  console.log(this.agregado, 'estado inicial')
}

ngOnChanges(): void {
  const added = localStorage.getItem('agregado')
  this.agregado = added ? JSON.parse(added) : false
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
  this.ps.agregarAlCarrito(this.objetoProducto);
}

agregarAFavorito(prod: ProductModel): void {
  this.ps.agregarFavs(prod)
}
}

