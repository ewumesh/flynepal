import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/shop/home/home.component';
import {ShopModule} from './components/shop/shop.module';
import {PagesModule} from './components/pages/pages.module';
import {BlogModule} from './components/blog/blog.module';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

      {
       path: 'home',
       loadChildren: () => import('./components/shop/shop.module').then(m => m.ShopModule)
      },
      {
        path: 'pages',
        loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule)

      },
      {
        path: 'blog',
        loadChildren: () => import('./components/blog/blog.module').then(m => m.BlogModule)

      },

  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
