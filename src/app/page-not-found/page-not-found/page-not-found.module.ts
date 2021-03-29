import {NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';

import { PageNotFoundComponent} from './components/page-not-found.component';
import {PageNotFoundRoutingModule} from './page-not-found.routing';
import { SharedModule} from './../../share/share.module';


@NgModule({
    declarations:[
        PageNotFoundComponent,
    ],
    imports:[
        CommonModule, 
        SharedModule, 
        PageNotFoundRoutingModule
    ]
})

export class PageNotFoundModule{}
