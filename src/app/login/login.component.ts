import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from './login.service';


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
          Swal.fire('Login successful');
        },
        error => {
          console.log('Login failed');
          Swal.fire('Login failed');
          // handle error, e.g. show an error message
        }
      );
  }
}
