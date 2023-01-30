import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public showPassword: boolean = false;
  public passwordtoggleicon = 'eye-outline';
  public validimageusername: string = 'assets/icon/error.png';
  public validimagepwd: string = 'assets/icon/error.png';
  constructor() { }

  togglepassword() {
    if (this.passwordtoggleicon == 'eye-outline') {
      this.passwordtoggleicon = 'eye-off-outline';
      this.showPassword = false;
    } else {
      this.passwordtoggleicon = 'eye-outline';
      this.showPassword = true;
    }
  }


  ngOnInit() { }
}
