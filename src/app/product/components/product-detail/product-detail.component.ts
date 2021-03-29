import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import { ProductsService } from './../../../core/services/product.services';
import { Product } from './../../../core/models/product.models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  product!: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id:string){
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

}
