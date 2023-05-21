import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductModel } from 'src/app/models/productos.model';
// import { ProductosService } from 'src/app/Services/productos.service';
import { filter, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent{
  productos: ProductModel[] = []
  productosMostrados: ProductModel[] = [];
  animal: string = 'todos'
  // subscripcion: Subscription 

  constructor () {}
    /* ngOnInit(): void {
      this.subscripcion = this.productosService.mandarAnimalObservable().subscribe(valor =>{this.animal = valor})
      this.productosService.getProductosFiltrados(this.animal).subscribe((res: ProductModel[]) => {
        return this.productos = res      
      })
    }

    filtrarProductos(animal: string): void {
      this.productosService.getProductosFiltrados(animal).subscribe((res: ProductModel[]) => {
        this.productosMostrados = res;
      });
    }

    ngOnDestroy() {
      this.subscripcion.unsubscribe();
    } */

}