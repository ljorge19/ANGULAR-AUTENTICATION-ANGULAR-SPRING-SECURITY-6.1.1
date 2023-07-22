import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8080'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  //authenticate(username: string, password: string) {
    //authenticate() {
    //const url = `${this.baseUrl}/helloWorld`;
    //const body = { username, password };
    //return this.http.post(url);

    authenticate(): Observable<string> {
      const url = `${this.baseUrl}/auth/hello`;
      return this.http.get(url, { responseType: 'text' });
  }

  // Outros métodos para interagir com a API
}