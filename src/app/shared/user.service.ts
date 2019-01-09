import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user';
import { Observable } from 'rxjs';
import { presupuestos } from './presupuestos';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    name: '',
    email: '',
    password: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods

  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/registerUser', user, this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
  }

  getPresupuesto(): Observable<presupuestos[]> {
    return this.http.get<presupuestos[]>(environment.apiBaseUrl + '/presupuesto');
  }

  postPresupuesto(presupuesto: presupuestos) {
    return this.http.post(environment.apiBaseUrl + '/presupuesto', presupuesto);
  }

  updatePresupuesto(name: string, presupuesto: presupuestos) {
    return this.http.put(environment.apiBaseUrl + '/presupuesto/' + name, presupuesto);
  }

  deletePresupuesto(presupuesto: presupuestos) {
    return this.http.delete(environment.apiBaseUrl + '/presupuesto/' + presupuesto.name);
  }

  
  //Helper Methods

  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  deleteToken() {
    sessionStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
