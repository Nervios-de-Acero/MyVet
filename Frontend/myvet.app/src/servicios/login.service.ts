import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged: boolean = false;
  userToken: string = '';

  constructor(private http: HttpClient) {
    const storedIsLogged = localStorage.getItem('isLogged');
    this.isLogged = storedIsLogged ? JSON.parse(storedIsLogged) : false;

    const localToken = localStorage.getItem('userToken') 
    this.userToken = localToken ? JSON.parse(localToken) : ''
  }

  loginUser(user:any): Observable<any>{
    return this.http.post("http://localhost:8000/api/login/", user);
  }

  logout(): void {
    localStorage.removeItem('isLogged');
  }

  setIsLogged(val: boolean): void {
    this.isLogged = val
    const stringified = JSON.stringify(this.isLogged)
    localStorage.setItem('isLogged', stringified)
  }

  setToken(val: string): void {
    this.userToken = val
    const stringified = JSON.stringify(this.userToken)
    localStorage.setItem('userToken', stringified)
  }
}