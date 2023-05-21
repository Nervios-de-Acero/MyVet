import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/productos.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit{

  @Input() objetoProducto!:ProductModel; 

  ngOnInit(): void {
    // console.log('componente PRODUCTO: ', this.objetoProducto)
  };
}
