import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-buscar-animales',
    templateUrl: './buscar-animales.component.html',
    styleUrls: ['./buscar-animales.component.css']
})
  export class BuscarAnimalesComponent {
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
  }
