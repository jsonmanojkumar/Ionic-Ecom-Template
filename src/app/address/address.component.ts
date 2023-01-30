import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  selectedIndex: any = null;
  addNewForm: boolean = true;
  constructor() { }

  ngOnInit() { }


  address = [
    { id: 1, fName: "Manoj", lName: "Kumar", addresType: "Office", pin: 247452, landmark: "near Govt. School", city: "saharanpur", state: 'UP', address: "description for the card content. Nothing more, nothing less." },
    { id: 2, fName: "Manoj", lName: "Kumar", addresType: "Home", pin: 247452, landmark: "near Govt. School", city: "saharanpur", state: 'UP', address: "description for the card content. Nothing more, nothing less." },
    { id: 3, fName: "Manoj", lName: "Kumar", addresType: "Office", pin: 247452, landmark: "near Govt. School", city: "saharanpur", state: 'UP', address: "description for the card content. Nothing more, nothing less." },
    { id: 4, fName: "Manoj", lName: "Kumar", addresType: "Home", pin: 247452, landmark: "near Govt. School", city: "saharanpur", state: 'UP', address: "description for the card content. Nothing more, nothing less." }
  ]

  setIndex(index: number, address: any) {
    this.selectedIndex = index;
    console.log("address", address);
  }

  addAddressSubmit() { 
    this.addNewForm = true;
  }

  addNewAdd() {
    this.addNewForm = false;
  }

  editAddress() {
    console.log("edit works");
  }
  removeAddress() {
    console.log("remove works");
  }

  goBack() {
    window.history.back()
  }
}
