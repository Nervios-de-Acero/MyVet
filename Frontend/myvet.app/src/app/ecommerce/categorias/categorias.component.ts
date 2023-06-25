import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/servicios/productos.service';
import { CatalogoComponent } from '../catalogo/catalogo.component'; 


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {}

}

