import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { PetshopComponent } from './petshop/petshop.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    InicioComponent,
    SucursalesComponent,
    PetshopComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
