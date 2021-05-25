import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyAccountComponent } from './my-account/my-account.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogModule } from '../blog/blog.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    SharedModule,
    BlogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPM6HA96FiWhoVieMmF0T-segiya5Ytf8'
    })

  ],
  declarations: [
    CartComponent,
    ContactComponent,
    WishlistComponent,
    CheckoutComponent,
    MyAccountComponent,
    FaqComponent,
    AboutUsComponent,
    ErrorPageComponent

  ]
})
export class PagesModule { }
