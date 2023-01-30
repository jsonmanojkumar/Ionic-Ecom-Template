import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
