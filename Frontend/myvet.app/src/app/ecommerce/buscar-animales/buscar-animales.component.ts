import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FiltroService } from 'src/app/filtro.service';

@Component({
    selector: 'app-buscar-animales',
    templateUrl: './buscar-animales.component.html',
    styleUrls: ['./buscar-animales.component.css']
  })
  export class BuscarAnimalesComponent {
    constructor(private filtroService: FiltroService) { }

    ngOnInit() {
    }
  
    filtrarPorAnimal(animal: string) {
      this.filtroService.animalSeleccionado = animal;
      this.filtroService.productosFiltrados = this.filtroService.filtrarProductosPorAnimal(this.filtroService.productos, animal);
    }
}