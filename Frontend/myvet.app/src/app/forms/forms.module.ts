import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RegistrarseComponent,
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RegistrarseComponent,
    InicioSesionComponent
  ]
})
export class FormsModule { }
