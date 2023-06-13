import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/productos.model';
import { ProductosService } from 'src/servicios/productos.service';
import { DetalleProductoService } from 'src/servicios/detalle-producto.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{
  productos: ProductModel[] = []
  wes: string = ''; // Declaración de la variable "wes" con un tipo de dato

    constructor (private productosService: ProductosService, private dp: DetalleProductoService) {

      this.wes = 'hola'; // Asignación de valor a la variable "wes"

    }
      ngOnInit(): void {
          this.productosService.getProductos().subscribe((res: ProductModel[]) => {
          return this.productos = res
        }) 

      /*  this.productosService.getProductos().subscribe((productos: ProductModel[]) => {
          this.productos = productos;
        }); */
    
      }
}
