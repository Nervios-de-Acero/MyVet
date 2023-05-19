import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'myvet.app'
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('https://localhost:3000')
      .subscribe(data => {
        console.log(data)
      }, error => {
        console.log(error)
      });
  }
  

} 
