import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  constructor() { }

  filtrarProductosPorAnimal(productos: any[], animal: string): any[] {
    return productos.filter(producto => producto.tipo_animal === animal);
  }
}
