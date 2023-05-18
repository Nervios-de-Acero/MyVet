import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { EcommerceModule } from '../ecommerce/ecommerce.module';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { PetshopComponent } from './petshop/petshop.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RouterModule } from '@angular/router';
import { ServiciosComponent } from './ServiciosComponent/servicios.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { FormsModule } from '../forms/forms.module';

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
    CommonModule,
    RouterModule,
    EcommerceModule,
    FormsModule
  ],
  exports:[
    InicioComponent,
    SucursalesComponent,
    PetshopComponent,
    ContactoComponent,
    QuienesSomosComponent,
    ServiciosComponent
  ]
})
export class PagesModule { }
