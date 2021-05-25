import { Component, OnChanges, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { CartService } from 'src/app/components/shared/services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { Router } from '@angular/router';
import { WishlistService } from '../../shared/services/wishlist.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
  animations: [
    trigger('myAnimation', [
      state('small', style({height: '0px'})),
      state('large', style({minHeight: '100px'})),

      transition('small <=> large', animate('400ms ease-in'))
    ])
    ]
})
export class ProductsComponent implements OnChanges {

  @Output() onOpenProductDialog: EventEmitter<any> = new EventEmitter();
  @Input('product') product: Array<Product> = [];

  defaultFruits: Product[];

  @Input() products: Product[];

  constructor(private wishlistService: WishlistService, private cartService: CartService, private dialog: MatDialog, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.products && changes.products.currentValue && changes.products.currentValue.length) {
      this.defaultFruits = this.products;
    }
  }
    // Add to cart
    public addToCart(product: Product,  quantity: number = 1) {
      this.cartService.addToCart(product,quantity);
    }

    public openProductDialog(product){
      let dialogRef = this.dialog.open(ProductDialogComponent, {
          data: {product},
          panelClass: 'product-dialog',
      });
      dialogRef.afterClosed().subscribe(product => {
        if(product){
          this.router.navigate(['/products', product.id, product.name]);
        }
      });
    }

    public filterProducts(predicate: string) {
     if(predicate === 'all') {
      this.products = this.defaultFruits
     } else {
      this.products = this.defaultFruits.filter(product => product.category === predicate);

     }

    }

       // Add to wishlist
   public addToWishlist(product: Product) {
    this.wishlistService.addToWishlist(product);
 }


 showMore = (product: Product) => product.state = product.state === 'small' ? 'large' : 'small';
}
