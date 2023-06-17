import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/servicios/login.service';

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

  constructor(private fb: FormBuilder, private login: LoginService) {}

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
        this.login.loginUser(this.formLogin.value).subscribe({
          next: (res) => {
            this.invalido = false
            console.log('Login exitoso!, ', res)
            this.login.userToken = res.access
          },
          error: (err) => {
            this.invalido = true
            console.log('No se pudo iniciar sesión ', err)
          }
        })
      }
    }



}


