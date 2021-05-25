import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { Product } from 'src/app/modals/product.model';
import { CartService } from 'src/app/components/shared/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.sass']
})
export class ProductDialogComponent implements OnInit {
  public products           :   Product[] = [];
  public counter            :   number = 1;
  product: any;

  constructor( @Inject(MAT_DIALOG_DATA) public data: { product: any, panelClass: string }, private router: Router, private cartService: CartService, public productsService: ProductService, public dialogRef: MatDialogRef<ProductDialogComponent>) {
    this.product = data.product;
   }

  ngOnInit() {
    this.productsService.getProducts().subscribe(product => this.products = product);
  }



  public addToCart(product: Product, quantity) {
    if (quantity == 0) return false;
    this.cartService.addToCart(product, parseInt(quantity));
  }

  public close(): void {
    this.dialogRef.close();
  }

  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if(this.counter >1){
       this.counter -= 1;
    }
  }

  //    // Add to cart
  //    public buyNow() {
  //     this.router.navigate(['/home/product', this.product.id]);
  //     this.close();
  //  }

}
