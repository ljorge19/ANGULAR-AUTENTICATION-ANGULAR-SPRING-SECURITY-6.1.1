import { Component } from '@angular/core';
import { LoginService } from './loginService'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  response: string = 'empty';

  constructor(private loginService: LoginService) {}

  login() {
    this.loginService.authenticate().subscribe(
      (data: string) => {
        // Handle the response data here
        this.response = data;
        console.log('Resultado da consulta: ' + this.response);
      },
      error => {
        // Handle errors here
        console.error('Error during authentication: ', error);
      }
    );
  }
}