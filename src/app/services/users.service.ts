import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private  http:HttpClient) { }
  getUsers() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.get<any>(environment.apiUrl + '/usuarios', { headers });
  }

  deleteUser(idUser) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.get<any>(environment.apiUrl + '/usuarios/delete/' + idUser, { headers });
  }
  register(data: any) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post<any>(environment.apiUrl + '/usuarios', data, { headers });
  }

  getUserById(idUser) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.get<any>(environment.apiUrl + '/usuarios/' + idUser, { headers });
  }

  editUser(data: any, idUser) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post<any>(environment.apiUrl + '/usuarios/' + idUser, data, { headers });
  }

}
