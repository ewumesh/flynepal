import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-galery-zoom',
  templateUrl: './galery-zoom.component.html',
  styleUrls: ['./galery-zoom.component.sass']
})
export class GaleryZoomComponent  {

  public product;
  public selectedProductImageIndex;

  constructor(

    public dialogRef: MatDialogRef<GaleryZoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product, index }) {
    this.product = data.product;
    this.selectedProductImageIndex = data.index;
  }

  public close(): void {
    this.dialogRef.close();
  }
}
