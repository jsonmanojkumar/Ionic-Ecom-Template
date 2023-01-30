import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed:500,
    loop: true,
    autoplay: {
      delay: 4000,
      reverseDirection: false
    }
  };
  constructor() { }

  ngOnInit() {}

colors=['red','green','yellow','black','gold']

goBack(){
  window.history.back()
}


}
