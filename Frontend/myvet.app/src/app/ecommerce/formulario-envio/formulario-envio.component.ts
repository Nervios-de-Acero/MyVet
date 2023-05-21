import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-envio',
  templateUrl: './formulario-envio.component.html',
  styleUrls: ['./formulario-envio.component.css']
})
export class FormularioEnvioComponent implements OnInit {
  formularioEnvio!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formularioEnvio = this.formBuilder.group({
      calle: ['', Validators.required],
      altura: ['', Validators.required],
      codigoPostal: ['', Validators.required],
      barrio: ['', Validators.required],
      ciudad: ['', Validators.required],
      observaciones: [''],
      localidad: ['', Validators.required],
      provincia: ['', Validators.required]
    });
  }
}