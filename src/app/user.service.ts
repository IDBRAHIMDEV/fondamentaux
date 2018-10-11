import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }
  
  url = environment.url;

  getUsers() {
    return this.http.get(this.url + '/users');
  }
}
