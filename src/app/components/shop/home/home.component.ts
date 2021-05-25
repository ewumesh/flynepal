import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from 'src/app/modals/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  products: Product[];
  public banners = [];
  public slides = [
    { title: 'THE BEST CHOICE IS HERE', subtitle: 'Welcome to Sophia, an oasis for all healthy food and organic produce sites, ready to make your online presentation shine.', image: 'assets/images/carousel/banner1.jpg' },
    { title: 'Biggest discount', subtitle: 'Welcome to Mildhill, an oasis for all healthy food and organic produce sites, ready to make your online presentation shine.', image: 'assets/images/carousel/banner2.jpg' },
    { title: 'Biggest sale', subtitle: 'Welcome to Mildhill, an oasis for all healthy food and organic produce sites, ready to make your online presentation shine.', image: 'assets/images/carousel/banner3.jpg' },
    { title: 'Huge sale', subtitle: 'Up to 70% off. ', image: 'assets/images/carousel/banner4.jpg' },
    { title: 'OUR BEST PRODUCTS', subtitle: 'Special Collection', image: 'assets/images/carousel/banner5.jpg' },
    { title: 'MASSIVE SALE', subtitle: 'Only for this month.', image: 'assets/images/carousel/banner6.jpg' },

  ];

  constructor(private productService: ProductService) { }

  ngOnInit() {


 this.productService.getProducts()
 .subscribe(
   (product: Product[]) => {
     this.products = product
   }
 )

  }






}
