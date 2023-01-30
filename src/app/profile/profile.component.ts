import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  edit: boolean = true;
  constructor() { }

  ngOnInit() { }

  editProfile() { 
    this.edit=!this.edit;
  }

  goBack() {
    window.history.back()
  }
}
