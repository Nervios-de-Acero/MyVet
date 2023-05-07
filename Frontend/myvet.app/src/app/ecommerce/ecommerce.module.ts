import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductoComponent } from './producto/producto.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CatalogoComponent,
    ProductoComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    CatalogoComponent,
    BannerComponent
  ]
})
export class EcommerceModule { }
