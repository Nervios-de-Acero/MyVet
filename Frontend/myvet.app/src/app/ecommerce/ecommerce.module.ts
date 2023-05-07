import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';

//subo este comment para hacer un nuevo push, luego lo borramos//

@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent
  ]
})
export class EcommerceModule { }
