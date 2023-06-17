import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged: boolean = false;
  userToken: string = '';

  constructor(private http: HttpClient) { }

  loginUser(user:any): Observable<any>{
    return this.http.post("http://localhost:8000/api/login/", user);
  }

  logout(token: string) {
    console.log(token)
  }
}