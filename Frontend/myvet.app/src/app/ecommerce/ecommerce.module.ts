import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductoComponent } from './producto/producto.component';
import { BannerComponent } from './banner/banner.component';
import { VistaDetalladaComponent } from './vista-detallada/vista-detallada.component';
import { RouterModule } from '@angular/router';
import { BuscarAnimalesComponent } from './buscar-animales/buscar-animales.component';


@NgModule({
  declarations: [
    CatalogoComponent,
    ProductoComponent,
    BannerComponent,
    VistaDetalladaComponent,
    BuscarAnimalesComponent
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
