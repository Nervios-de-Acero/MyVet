import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { PerfilComponent } from './perfil/perfil.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PerfilComponent,
    MenuComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PerfilComponent,
    MenuComponent,
    CarritoComponent
  ]
})
export class UsersModule { }
