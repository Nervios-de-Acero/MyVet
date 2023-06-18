import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  llamarTelefono() {
    const numeroTelefono = '+54113456789'; // Aquí debes proporcionar el número de teléfono que deseas llamar
    window.open(`tel:${numeroTelefono}`);
  }
}
