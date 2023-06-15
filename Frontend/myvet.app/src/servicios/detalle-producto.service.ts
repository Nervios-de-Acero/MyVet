import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/models/productos.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleProductoService {

private detail!: ProductModel;
private mostrarDetalle: boolean = false;

constructor() { }

setDetail(producto: ProductModel): void {
  this.detail =  producto;
  this.mostrarDetalle = true;
}

getDetail(): ProductModel {
  return this.detail;
}

getBoolean(): Observable<boolean> {
  console.log(this.mostrarDetalle)
  return of(this.mostrarDetalle)
}

}
