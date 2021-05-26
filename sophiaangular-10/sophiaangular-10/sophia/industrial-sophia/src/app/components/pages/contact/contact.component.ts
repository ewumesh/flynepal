import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  latitude = 51.678418;
  longitude = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
