import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-ecommerce',
  templateUrl: './navbar-ecommerce.component.html',
  styleUrls: ['./navbar-ecommerce.component.css']
})
export class NavbarEcommerceComponent implements OnInit {
  toggleButton: HTMLElement | null | undefined;
  navWrapper: HTMLElement | null | undefined;

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
  }
}
