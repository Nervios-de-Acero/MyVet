import { Component } from '@angular/core';
import { LoginService } from 'src/servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuOpen = false;

  constructor(private login: LoginService, private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('menu-toggle')) {
      this.menuOpen = false;
    }
  }

  logout(){
    localStorage.removeItem('isLogged')
    window.location.reload()
}
}