import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
        private baseUrl = 'http://localhost:8000'; 
         constructor(private http: HttpClient) { }

     registerUser(user: any) {
             return this.http.post(`${this.baseUrl}/signup/`, user);
     }
}

