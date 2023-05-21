import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BannerComponent } from './banner/banner.component';
import { BuscarAnimalesComponent } from './buscar-animales/buscar-animales.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CommonModule } from '@angular/common';
import { FormularioEnvioComponent } from './formulario-envio/formulario-envio.component';
import { NgModule } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';
import { PromocionesBancariasComponent } from './promociones-bancarias/promociones-bancarias.component';
import { RouterModule } from '@angular/router';
import { VistaDetalladaComponent } from './vista-detallada/vista-detallada.component';
import { ListaDeDeseosComponent } from './lista-de-deseos/lista-de-deseos.component';
import { FormulariosModule } from '../forms/forms.module'; 

@NgModule({
  declarations: [
    CatalogoComponent,
    ProductoComponent,
    BannerComponent,
    VistaDetalladaComponent,
    BuscarAnimalesComponent,
    CategoriasComponent,
    PromocionesBancariasComponent,
    FormularioEnvioComponent,
    ListaDeDeseosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormulariosModule
  ],
  exports: [
    CatalogoComponent,
    BannerComponent,
    BuscarAnimalesComponent,
    CategoriasComponent,
    PromocionesBancariasComponent, 
    ListaDeDeseosComponent
  ]
})
export class EcommerceModule { }
