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

  constructor(private fb: FormBuilder) {}
  onSubmit() {
    console.log('Se envió el form')
    console.log(this.formRegistro.value)
    console.log(this.formRegistro.invalid)
    this.enviado = true
  }

  esInvalido(nombre: string) {
  return this.formRegistro.get(nombre)?.invalid &&
    ( this.formRegistro.get(nombre)?.touched || this.enviado)
  }

  mostrarError(nombre:string, error:string){
  return this.formRegistro.get(nombre)?.hasError(error) &&
    ( this.formRegistro.get(nombre)?.touched || this.enviado)
  }
}