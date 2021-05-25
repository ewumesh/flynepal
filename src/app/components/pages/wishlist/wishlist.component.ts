import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/modals/product.model';
import { CartService } from '../../shared/services/cart.service';
import { WishlistService } from '../../shared/services/wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass']
})
export class WishlistComponent implements OnInit {

  public product        :   Observable<Product[]> = of([]);
  wishlistItems  :   Product[] = [];

  constructor(private router: Router, private cartService: CartService, private wishlistService: WishlistService) {
    this.product = this.wishlistService.getProducts();
    this.product.subscribe(products => this.wishlistItems = products);
  }

  ngOnInit() {
  }

     // Add to cart
     public addToCart(product: Product,  quantity: number = 1) {
      this.cartService.addToCart(product,quantity);
      console.log(product, quantity);
    }

// Remove from wishlist
public removeItem(product: Product) {
 this.wishlistService.removeFromWishlist(product);
}

}
