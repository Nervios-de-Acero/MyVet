import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { PerfilComponent } from './perfil/perfil.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RouterModule } from '@angular/router';
import { NgxPayPalModule } from 'ngx-paypal';
//import { NgxSpinnerModule } from 'ngx-spinner/public_api';


@NgModule({
    declarations: [
        PerfilComponent,
        MenuComponent,
        CarritoComponent
    ],
    exports: [
        PerfilComponent,
        MenuComponent,
        CarritoComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgxPayPalModule
        //NgxSpinnerModule
    ]
})
export class UsersModule { }
