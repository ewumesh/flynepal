import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Product} from "../../modals/product.model";
import {CartItem} from "../../modals/cart-item";
import {ProductService} from "../shared/services/product.service";
import {CartService} from "../shared/services/cart.service";
import { Router, NavigationEnd } from '@angular/router';
import { SidebarMenuService } from '../shared/sidebar/sidebar-menu.service';
import { SidenavMenu } from '../shared/sidebar/sidebar-menu.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent  {



  products: Product[];

  indexProduct: number;
  shoppingCartItems: CartItem[] = [];

  public banners = [];

  wishlistItems  :   Product[] = [];

  public url : any;



  constructor() {}


  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
}

}
