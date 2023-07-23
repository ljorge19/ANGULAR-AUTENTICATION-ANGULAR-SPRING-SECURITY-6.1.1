import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs';
import { LoginResponse } from './login.response.model';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'http://localhost:8080'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}
  private url = 'http://localhost:8080/auth/login';

  authenticate(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url, {
      login: username,
      password: password
    }).pipe(tap((res: LoginResponse) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          console.log('Authentication successful! - token=' + res.token );
        }
    }));
  }
}
 
  
  
  
  
  
  
