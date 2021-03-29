import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';


import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './loading/loading/loading.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    
  ],
  exports: [
    HeaderComponent, 
    LoadingComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule, 
    MaterialModule
  ]
})
export class SharedModule { }
