import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  formLogin = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  invalido=false;
  enviado=false;

  constructor(private fb: FormBuilder) {}

  mostrarError(nombre:string, error:string){
    return this.formLogin.get(nombre)?.hasError(error) &&
      ( this.formLogin.get(nombre)?.touched || this.enviado)
    }

    onSubmit() {
      this.enviado = true
  
      if(this.formLogin.invalid) {
        this.invalido = true
        return
      }
      else {
        this.invalido = false
        console.log(this.formLogin.value) 
        // INYECTAR SERVICIO CON MÉTODO GET
      }
    }



}


