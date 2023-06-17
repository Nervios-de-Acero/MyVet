import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-ecommerce',
  templateUrl: './navbar-ecommerce.component.html',
  styleUrls: ['./navbar-ecommerce.component.css']
})
export class NavbarEcommerceComponent implements OnInit {
  constructor(private router: Router) { }

  toggleButton: HTMLElement | null | undefined;
  navWrapper: HTMLElement | null | undefined;
  isLogged: boolean = false;

  ngOnInit() {
    this.toggleButton = document.getElementById('button-menu');
    this.navWrapper = document.getElementById('nav');

    if (this.toggleButton && this.navWrapper) {
      this.toggleButton.addEventListener('click', () => {
        this.toggleButton!.classList.toggle('close');
        this.navWrapper!.classList.toggle('show');
      });

      this.navWrapper.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.id === 'nav') {
          this.navWrapper!.classList.remove('show');
          this.toggleButton!.classList.remove('close');
        }
      });
    }

    const loggedUser = localStorage.getItem('isLogged') 
    this.isLogged = loggedUser ? JSON.parse(loggedUser) : false
  }

  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
