import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
providedIn: 'root'
})
export class RegistroService {

constructor(private http: HttpClient) { }

registerUser(user:any): Observable<any>{
        console.log('tipo', typeof user)
        return this.http.post("http://localhost:8000/api/register/", user);
}
}

