import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { EcommerceModule } from 'src/app/ecommerce/ecommerce.module';
import { ProductosService } from 'src/servicios/productos.service';
import { ProductModel } from 'src/app/models/productos.model';



@Component({
  selector: 'app-petshop',
  templateUrl: './petshop.component.html',
  styleUrls: ['./petshop.component.css']
})
export class PetshopComponent {
  /* productos: ProductModel[] = [];
  private products: ProductModel[] = [];
  private productosFiltrados: ProductModel[] = [];
  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((productos: ProductModel[]) => {
      this.productos = productos;
    });    
  }

  seleccionarAnimal(animal: string): void {
    this.productosFiltrados = this.productosService.filtrarProductosPorAnimal(animal);
  }
  filtrarProductosPorAnimal(animal: string): ProductModel[] {
    // Lógica para filtrar los productos según el animal
    const productosFiltrados = this.products.filter(producto => producto.tipo_animal === animal);
    return this.productosFiltrados = productosFiltrados;
  } */
}
