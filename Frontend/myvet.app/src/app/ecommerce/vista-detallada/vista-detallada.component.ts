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
export class VistaDetalladaComponent implements OnInit{

  constructor(private dp: DetalleProductoService, private router: Router, private ps: ProductosService) {}

objetoProducto!: ProductModel;
agregado: boolean = false;
isLogged: boolean = false;

ngOnInit(): void {
  this.objetoProducto = this.dp.getDetail()
  
  const favoritos = localStorage.getItem('favoritos')
  favoritos ? this.comprobarAgregado(JSON.parse(favoritos), this.objetoProducto.id) : this.agregado = false

  const loggedUser = localStorage.getItem('isLogged') 
  this.isLogged = loggedUser ? JSON.parse(loggedUser) : false
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
  this.agregado = true
}


comprobarAgregado(val: ProductModel[], idProd: number): void{
if(val.length > 0){
  val.find(el => el.id === idProd) ? this.agregado = true : this.agregado = false
  return
}
this.agregado = false
}
}