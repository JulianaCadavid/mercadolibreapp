import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { mergeMap } from 'rxjs/operators';

import { Product } from './../../../core/models/product.models';
import { ProductsService } from './../../../core/services/product.services';
import { PageParameters} from './../../../core/models/page.models';
import { ActivatedRoute, Params } from '@angular/router';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   
  @ViewChild(MatPaginatorModule) paginator: MatPaginatorModule;

  pageParameters: PageParameters;
  pageNumber: number;
  totalItemsAvailable: number;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { 
    this.pageParameters = new PageParameters();
  }

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const search = params.search;
      this.search(search);
    });
  }

  clickProduct(id:number){

  }

  fetchProducts(offset:number){
    this.pageParameters.offset = offset;
    this.pageParameters.limit = 30;
    this.productsService.getProducts(this.pageParameters)
    .subscribe(products => {
      this.totalItemsAvailable = products.paging.total;
      products.results.forEach(product => {
        this.productsService.getProduct(product.id).subscribe(producto=> {
          this.products.push(producto);
        });
      });
    });
  }

  search(search: string ){
    this.products= [];
    this.pageParameters.query = search;
    this.fetchProducts(0);
  }

  onPaginateChange(event: any){
    this.products= [];
    this.pageNumber = event.pageIndex;
    this.fetchProducts(this.pageNumber *30);
  }
}
