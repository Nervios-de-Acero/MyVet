import { BannerComponent } from './banner/banner.component';
import { BuscarAnimalesComponent } from './buscar-animales/buscar-animales.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';
import { PromocionesBancariasComponent } from './promociones-bancarias/promociones-bancarias.component';
import { RouterModule } from '@angular/router';
import { VistaDetalladaComponent } from './vista-detallada/vista-detallada.component';

@NgModule({
  declarations: [
    CatalogoComponent,
    ProductoComponent,
    BannerComponent,
    VistaDetalladaComponent,
    BuscarAnimalesComponent,
    CategoriasComponent,
    PromocionesBancariasComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    CatalogoComponent,
    BannerComponent,
    BuscarAnimalesComponent,
    CategoriasComponent,
    PromocionesBancariasComponent
  ]
})
export class EcommerceModule { }
