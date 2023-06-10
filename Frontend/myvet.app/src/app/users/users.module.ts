import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { PerfilComponent } from './perfil/perfil.component';

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
