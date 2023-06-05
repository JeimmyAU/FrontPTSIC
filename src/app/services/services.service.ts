import { HttpClient, HttpParams } from '@angular/common/http'

import { Brands } from '../interfaces/params.interface';
import { Encuesta } from '../interfaces/encuesta.interface';
import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login.interface';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {

  }
  API_URL = environment.apiUrl

  login(values: Login): Observable<boolean> {
    const params = new HttpParams().set('username', values.username).set('pass', values.pass);
    return this.http.post<boolean>(`${this.API_URL}/formulario/login`, null,  { params })
  }

  saveForm(body: Encuesta): Observable<any> {
    return this.http.post(`${this.API_URL}/encuestas/crear`, body);
  }

  getListForm(): Observable<Encuesta[]> {
    return this.http.get<Encuesta[]>(`${this.API_URL}/encuestas/listar`);
  }

  deleteForm(id: number): Observable<any> {
    // const params = new HttpParams().set('id', id);
    return this.http.delete<any>(`${this.API_URL}/encuestas/eliminar/${id}`);
  }

  getParameters(): Observable<Brands[]> {
    return this.http.get<Brands[]>(`${this.API_URL}/marcas/listar`)
  }
}
