import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  formRegistro = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$')]],
    apellido: ['',[Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$')]],
    email: ['', [Validators.required, Validators.email]],
    pass: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$\%\^&\*\.]).{8,}$/)]],
    pass2: ['', Validators.required]
  })

  enviado = false;
  valorPass: string | undefined | null;
  confirmacionInvalida = false;
  invalido = false;

  constructor(private fb: FormBuilder) {}

  esInvalido(nombre: string) {
  return this.formRegistro.get(nombre)?.invalid &&
    ( this.formRegistro.get(nombre)?.touched || this.enviado)
  }

  mostrarError(nombre:string, error:string){
  return this.formRegistro.get(nombre)?.hasError(error) &&
    ( this.formRegistro.get(nombre)?.touched || this.enviado)
  }

  obtenerPassword() {
    this.valorPass = this.formRegistro.get('pass')?.value 
  }

  compararPass(){
    const confirmacion = this.formRegistro.get('pass2')?.value
    this.confirmacionInvalida = this.valorPass !== confirmacion 
  }

  onSubmit() {
    this.enviado = true

    if(this.formRegistro.invalid) {
      this.invalido = true
      return
    }
    else {
      this.invalido = false
      console.log(this.formRegistro.value) 
      // INYECTAR SERVICIO CON MÉTODO POST
    }
  }
}