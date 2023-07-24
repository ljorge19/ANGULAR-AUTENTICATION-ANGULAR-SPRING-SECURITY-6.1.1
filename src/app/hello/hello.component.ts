import { Component } from '@angular/core';
import { HelloService } from './helloService';
import Swal from 'sweetalert2';

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
        Swal.fire('Resultado da consulta: ' + this.response);
      },
      (error) => {
        // Handle errors here
        Swal.fire('Error during authentication: ', error);
      },
    );
  }
}

