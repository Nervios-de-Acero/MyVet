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
import { NavbarComponent } from './shared/navbar/navbar.component';


const routes: Routes = [
    {path:'', component:InicioComponent},
    {path:'quienes-somos', component:QuienesSomosComponent},
    {path:'petshop', component:PetshopComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'sucursales', component:SucursalesComponent},
    {path:'servicios', component:ServiciosComponent}
];

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [RouterModule],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        AppRoutingModule,
        PagesModule,
        SharedModule
    ]
})
export class AppModule { }
