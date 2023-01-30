import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 500,
    loop: true,
    autoplay: {
      delay: 8000,
      reverseDirection: false
    }
  };
  constructor() { }

  ngOnInit() { }


  
}
