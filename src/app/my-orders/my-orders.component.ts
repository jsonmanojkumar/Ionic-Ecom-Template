import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
})
export class MyOrdersComponent implements OnInit {
  segmentValue: any = "completed";
  constructor() { }

  ngOnInit() {}



  segmentChanged(e:any) {
    this.segmentValue = e.target.value;
  }

  goBack(){
    window.history.back()
  }
}
