import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { PetshopComponent } from './pages/petshop/petshop.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';

const routes: Routes = [
  // {path:"sucursales", component:SucursalesComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
