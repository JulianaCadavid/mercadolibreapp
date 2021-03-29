import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

import { Product } from './../../../core/models/product.models';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {


  @Input() product : Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();


  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    
  }

}
