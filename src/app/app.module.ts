import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxImgZoomModule } from 'ngx-img-zoom';

import { MainComponent } from './components/main/main.component';


import { AppRoutingModule } from './app-routing.module';
import { ShopModule } from './components/shop/shop.module';
import { SharedModule } from './components/shared/shared.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ColorOptionsComponent } from './components/color-options/color-options.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ColorOptionsComponent
  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    SharedModule,
    ShopModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxImgZoomModule

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
