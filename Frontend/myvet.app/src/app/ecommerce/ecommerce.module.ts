import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductoComponent } from './producto/producto.component';

//subo este comment para hacer un nuevo push, luego lo borramos//

@NgModule({
  declarations: [
    CatalogoComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    CatalogoComponent
  ]
})
export class EcommerceModule { }
