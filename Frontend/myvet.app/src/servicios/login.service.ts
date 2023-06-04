import { Injectable } from '@angular/core';
/* import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; */

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
}

/* 

- crear función que contenga método GET para
traer los usuarios 
- hacer una segunda función que valide que el user
que se ingrese al form de log in existe,
- si existe tiene que comprobar que la contraseña sea
la misma que se ingresa en el formulario, que la que 
trae el GET
- si el usuario no existe, tiene que emitirse un mensaje
de error que diga que el user no es válido:
emitir un mensaje que diga que el usuario y/o contraseña
no es válido, y ponga los campos en rojo

*/