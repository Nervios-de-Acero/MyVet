import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosService } from 'src/servicios/productos.service';
import { ProductModel } from 'src/app/models/productos.model';

@Component({
    selector: 'app-buscar-animales',
    templateUrl: './buscar-animales.component.html',
    styleUrls: ['./buscar-animales.component.css']
})
  export class BuscarAnimalesComponent {
    /* productosFiltrados: ProductModel[] = [];
   
    constructor(private productosService: ProductosService) {} */
  
    /* seleccionarAnimal(animal: string): void {
      this.productosFiltrados = this.productosService.getFilteredProducts(animal);
    }
    seleccionarAnimal(animal: string): void {
      // Lógica para filtrar los productos según el animal seleccionado
      const productosFiltrados = ...;
      // Establecer los productos filtrados en el servicio
      this.productosService.setProductosFiltrados(productosFiltrados);
    } */

  /*   seleccionarAnimal(animal: string): void {
      this.productosFiltrados = this.productosService.filtrarProductosPorAnimal(animal);
    } */
}
   /*  animal: string = 'todos'
    constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.mandarAnimalObservable.subscribe(animal =>{this.animal = animal})
  }

    /*filtrarPorAnimal(tipoAnimal: string): void {
      this.productosService.filtrarProductos('todos', tipoAnimal);
    } */
    //   filtrarPorAnimal(tipoAnimal: string): void {
    //   this.productosService.conseguirAnimal(tipoAnimal);
    // }  
  
