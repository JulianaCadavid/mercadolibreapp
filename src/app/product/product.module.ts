import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

import { ProductRoutingModule } from './product_routing.module';
import { SharedModule } from './../share/share.module';
import {MaterialModule} from './../material/material.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsComponent,

  ],
  imports: [
    ProductRoutingModule,
    SharedModule,
    CommonModule, 
    MaterialModule

    
  ],
 
})
export class ProductModule { }
