import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '././core/core.module';
import { SharedModule} from './share/share.module';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,

  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    AppRoutingModule, 
    CoreModule, 
    SharedModule, 
    MatPaginatorModule, 
    MatTableModule
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
