import { Component, OnInit } from '@angular/core';
import { ProductDialogComponent } from '../../products/product-dialog/product-dialog.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductZoomComponent } from '../../products/product-details/product-zoom/product-zoom.component';
import { GaleryZoomComponent } from './galery-zoom/galery-zoom.component';


@Component({
  selector: 'app-popular-recipes',
  templateUrl: './popular-recipes.component.html',
  styleUrls: ['./popular-recipes.component.sass']
})
export class PopularRecipesComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  // Blog
  public blog = [{
    image: 'assets/images/gal/g3.jpg',
    date: '25 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/gal/g2.jpg',
    date: '26 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/gal/gg.jpg',
    date: '27 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/gal/g5.jpg',
    date: '28 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
}, {
  image: 'assets/images/gal/g4.jpg',
  date: '28 January 2018',
  title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
  by: 'John Dio'
}, {
  image: 'assets/images/gal/g7.jpg',
  date: '28 January 2018',
  title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
  by: 'John Dio'
}, {
  image: 'assets/images/gal/g6.jpg',
  date: '28 January 2018',
  title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
  by: 'John Dio'
}, {
  image: 'assets/images/gal/g8.jpg',
  date: '28 January 2018',
  title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
  by: 'John Dio'
}]


public openProductDialog(product, bigProductImageIndex) {
  let dialogRef = this.dialog.open(GaleryZoomComponent,
    {
    data: {product, index: bigProductImageIndex},

    panelClass: 'product-dialog',
  });
  dialogRef.afterClosed().subscribe(product => {
    if (product) {
      this.router.navigate(['/products', product.id, product.name]);
    }
  });
}

}
