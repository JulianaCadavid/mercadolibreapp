import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


import { FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  q= '';
  search = new FormControl('');
  total$: Observable<number>;

  constructor() { }

  ngOnInit(): void {
  }

}