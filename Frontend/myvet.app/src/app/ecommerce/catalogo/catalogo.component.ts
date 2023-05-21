import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/productos.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{
  productos: ProductModel[] = []
  
    constructor (private productosService: ProductosService) {}
      ngOnInit(): void {
         this.productosService.getProductos().subscribe((res: ProductModel[]) => {
          return this.productos = res
        }) 
       /*  this.productosService.getProductos().subscribe((productos: ProductModel[]) => {
          this.productos = productos;
        }); */
    
      }
}
