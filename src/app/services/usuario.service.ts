import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://gorest.co.in/public-api/users';
  token = 'b1d915e720b07e25e9f3688d744a8c1011231e2397a41b7105ceacff3b6e2cb7';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  }
}
