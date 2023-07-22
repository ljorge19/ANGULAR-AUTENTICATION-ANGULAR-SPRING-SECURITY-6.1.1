import { Component, OnInit, ViewChild , ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Cliente {
  nome: string;
  cpf: string;
  rg: string;
  cargo: string;
  contaBancaria: string;
  endereco: string;
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClienteComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'cpf', 'rg', 'cargo', 'contaBancaria', 'endereco'];

  dataSource!: MatTableDataSource<Cliente>; // Use "!" for definite assignment assertion

  clientes: Cliente[] = [
    { nome: 'João', cpf: '111.111.111-11', rg: '2222222', cargo: 'Gerente', contaBancaria: '123456789', endereco: 'Rua A, 123' },
    { nome: 'Maria', cpf: '222.222.222-22', rg: '3333333', cargo: 'Analista', contaBancaria: '987654321', endereco: 'Rua B, 456' },
    { nome: 'Pedro', cpf: '333.333.333-33', rg: '4444444', cargo: 'Programador', contaBancaria: '456789123', endereco: 'Rua C, 789' }
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Use "!" for definite assignment assertion
  @ViewChild(MatSort) sort!: MatSort; // Use "!" for definite assignment assertion

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.clientes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
