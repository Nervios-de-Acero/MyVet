import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { PetshopComponent } from './pages/petshop/petshop.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './pages/ServiciosComponent/servicios.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulariosModule } from './forms/forms.module';
import { InicioSesionComponent } from './forms/inicio-sesion/inicio-sesion.component';
import { ProductosService } from 'src/servicios/productos.service';
import { RegistrarseComponent } from './forms/registrarse/registrarse.component';
import { MenuComponent } from './users/menu/menu.component';
import { DetalleProductoService } from 'src/servicios/detalle-producto.service';
import { FavoritosComponent } from './ecommerce/favoritos/favoritos.component';
import { CarritoComponent } from './users/carrito/carrito.component';
import { VistaDetalladaComponent } from './ecommerce/vista-detallada/vista-detallada.component';
import { PerfilComponent } from './users/perfil/perfil.component';
import { UsersModule } from './users/users.module';
import { NgxPayPalModule } from 'ngx-paypal';

//import { NgxSpinnerModule } from 'ngx-spinner';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
    {path:'', component:InicioComponent},
    {path:'quienes-somos', component:QuienesSomosComponent},
    {path:'petshop', component:PetshopComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'sucursales', component:SucursalesComponent},
    {path:'servicios', component:ServiciosComponent},
    {path:'inicio-sesion', component:InicioSesionComponent},
    {path:'registrarse', component:RegistrarseComponent},
    { path:'menu', component: MenuComponent },
    { path:'favoritos', component: FavoritosComponent },
    { path:'carrito', component: CarritoComponent },
    { path:'perfil', component: PerfilComponent }
];


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [ProductosService, DetalleProductoService],
    bootstrap: [AppComponent],
    exports: [RouterModule],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        AppRoutingModule,
        PagesModule,
        SharedModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormulariosModule,
        UsersModule,
        NgxPayPalModule
        //NgxSpinnerModule,
        //NgModule
    ],
    //schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
