import { Injectable } from '@angular/core';
import { presupuestos } from './presupuestos'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  serverUrl = "/api/v1";

  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<presupuestos[]> {
    const url = this.serverUrl + "/presupuestos";
    return this.httpClient.get<presupuestos[]>(url);
  }
}
