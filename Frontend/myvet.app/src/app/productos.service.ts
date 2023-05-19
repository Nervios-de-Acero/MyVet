import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url:String = "https://localhost:3000/"

  constructor(private http:HttpClient) {}
    this.http.get('https://localhost:3000')
      .subscribe(data => {console.log(data)}, 
      error => {console.log(error)});
  
}
