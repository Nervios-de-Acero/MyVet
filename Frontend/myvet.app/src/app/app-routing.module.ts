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
import { MenuComponent } from './users/menu/menu.component'; 
import { FavoritosComponent } from './ecommerce/favoritos/favoritos.component';
import { CarritoComponent } from './users/carrito/carrito.component';
import { PerfilComponent } from './users/perfil/perfil.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'quienes-somos', component:QuienesSomosComponent},
  {path:'petshop', 
  component: PetshopComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'sucursales', component:SucursalesComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'inicio-sesion', component:InicioSesionComponent},
  {path:'registrarse', component:RegistrarseComponent},
  {path: 'petshop/producto/:id',
    component: VistaDetalladaComponent},
  { path:'menu', component: MenuComponent},
  { path:'favoritos', component: FavoritosComponent},
  { path:'carrito', component: CarritoComponent},
  { path:'perfil', component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
