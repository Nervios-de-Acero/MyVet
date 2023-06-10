import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { PetshopComponent } from './pages/petshop/petshop.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './pages/ServiciosComponent/servicios.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { InicioSesionComponent } from './forms/inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './forms/registrarse/registrarse.component';
import { CatalogoComponent } from './ecommerce/catalogo/catalogo.component';
import { VistaDetalladaComponent } from './ecommerce/vista-detallada/vista-detallada.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'quienes-somos', component:QuienesSomosComponent},
  {path:'petshop', 
  component: PetshopComponent,
  children: [
    {path: '',
    component: CatalogoComponent},
    {path: 'producto/:id',
    component: VistaDetalladaComponent}
  ]},
  {path:'contacto', component:ContactoComponent},
  {path:'sucursales', component:SucursalesComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'inicio-sesion', component:InicioSesionComponent},
  {path:'registrarse', component:RegistrarseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
