import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/productos.model';
import { ProductosService } from 'src/servicios/productos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
favoritos: ProductModel[] = []

  constructor(private ps: ProductosService) {}
  
ngOnInit(): void {
  this.ps.traerFavs()
  this.favoritos = this.ps.favoritos
  console.log(this.favoritos.length)
}

eliminarFavorito(prod: ProductModel) {
  this.ps.quitarFavs(prod)
  const index = this.favoritos.findIndex(el => el.id === prod.id);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
    }
}
}
