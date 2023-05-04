import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './ServiciosComponent/servicios.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { PetshopComponent } from './petshop/petshop.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';



@NgModule({
  declarations: [
    InicioComponent,
    SucursalesComponent,
    PetshopComponent,
    ContactoComponent,
    ServiciosComponent,
    QuienesSomosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
