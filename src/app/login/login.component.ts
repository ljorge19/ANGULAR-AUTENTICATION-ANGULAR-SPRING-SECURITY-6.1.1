import { Component } from '@angular/core';
import { LoginService } from './login.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username!: string;
  password!: string;
  response: string = 'empty';

  constructor(private loginService: LoginService) {}

 
  login(): void {
    this.loginService.authenticate(this.username, this.password)
      .subscribe(
        res => {
          console.log('Login successful');
          // handle successful login, e.g. navigate to another page
        },
        error => {
          console.log('Login failed');
          // handle error, e.g. show an error message
        }
      );
  }
}
