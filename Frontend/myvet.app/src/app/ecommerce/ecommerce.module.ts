import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { BuscarAnimalesComponent } from './buscar-animales/buscar-animales.component';

//subo este comment para hacer un nuevo push, luego lo borramos//

@NgModule({
  declarations: [
    CatalogoComponent,
    BuscarAnimalesComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    CatalogoComponent,
    BuscarAnimalesComponent
  ]
})
export class EcommerceModule { }
