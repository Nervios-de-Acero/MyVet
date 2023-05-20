import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RouterModule } from '@angular/router';
import { DatosTarjetaComponent } from './datos-tarjeta/datos-tarjeta.component';

@NgModule({
  declarations: [
    RegistrarseComponent,
    InicioSesionComponent,
    DatosTarjetaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RegistrarseComponent,
    InicioSesionComponent,
    DatosTarjetaComponent
  ]
})
export class FormsModule { }
