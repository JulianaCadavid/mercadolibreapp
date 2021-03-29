import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LayoutComponent} from './layout/layout/layout.component';

const routes: Routes = [
    {
        path:'', 
        component: LayoutComponent, 
        children:[
            {
                path:'', 
                redirectTo: '/products/search/tecnologia', 
                pathMatch: 'full',
            },
            {
                path: 'products', 
                loadChildren:() => import('./product/product.module').then(m => m.ProductModule)
            },
        ]
    }, 
    {
        path:'**', 
        loadChildren: () => import('./page-not-found/page-not-found/page-not-found.module').then(m=> m.PageNotFoundModule)

    },
  
];

@NgModule({
    imports: [RouterModule. forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}