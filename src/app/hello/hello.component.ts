import { Component } from '@angular/core';
import { HelloService } from './helloService';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  username!: string;
  password!: string;
  response!: string;

  constructor(private helloService: HelloService) {}

  hello() {
    this.helloService.authenticate().subscribe(
      (data: string) => {
        // Handle the response data here
        this.response = data;
        console.log('Resultado da consulta: ' + this.response);
      },
      (error) => {
        // Handle errors here
        console.error('Error during authentication: ', error);
      },
    );
  }
}

