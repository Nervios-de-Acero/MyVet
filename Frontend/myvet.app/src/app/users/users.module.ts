import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    PerfilComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
