import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from "./shared/shared.module";

const routes: Routes = [
    {path:'', component:InicioComponent},
    {path:'quienes-somos', component:QuienesSomosComponent},
    {path:'petshop', component:PetshopComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'sucursales', component:SucursalesComponent}
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
