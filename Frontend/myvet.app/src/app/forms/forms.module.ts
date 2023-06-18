import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RouterModule } from '@angular/router';
import { DatosTarjetaComponent } from './datos-tarjeta/datos-tarjeta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RegistrarseComponent,
    InicioSesionComponent,
    DatosTarjetaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    RegistrarseComponent,
    InicioSesionComponent,
    DatosTarjetaComponent
  ]
})
export class FormulariosModule { }
