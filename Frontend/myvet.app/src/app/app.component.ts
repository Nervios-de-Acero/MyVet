import { Component } from '@angular/core';
import { ProductosService } from './productos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'myvet.app'
  constructor(public json: ProductosService) {}
  ngOnInit(): void {
  this.json.getProductos().subscribe((res: object) => {
    console.log(res)
  })
  }

   

} 
