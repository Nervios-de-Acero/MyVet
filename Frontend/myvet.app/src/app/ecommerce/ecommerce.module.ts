import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductoComponent } from './producto/producto.component';
import { BannerComponent } from './banner/banner.component';
import { VistaDetalladaComponent } from './vista-detallada/vista-detallada.component';
import { RouterModule } from '@angular/router';
import { BuscarAnimalesComponent } from './buscar-animales/buscar-animales.component';
=======
import { CategoriasComponent } from './categorias/categorias.component';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
<<<<<<< Updated upstream
    CatalogoComponent,
    ProductoComponent,
    BannerComponent,
    VistaDetalladaComponent,
    BuscarAnimalesComponent
=======
    CategoriasComponent
>>>>>>> Stashed changes
  ],
  imports: [
    CommonModule
  ],
  exports : [
    CatalogoComponent,
    BannerComponent,
    BuscarAnimalesComponent
  ]
})
export class EcommerceModule { }
