import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarAnimalesComponent } from './buscar-animales/buscar-animales.component';

//subo este comment para hacer un nuevo push, luego lo borramos//

@NgModule({
  declarations: [
    BuscarAnimalesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BuscarAnimalesComponent
  ]
})
export class EcommerceModule { }
