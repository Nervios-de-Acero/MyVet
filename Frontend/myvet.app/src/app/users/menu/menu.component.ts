import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    
  }

  closeMenu(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('menu-toggle')) {
      this.menuOpen = false;
    }
  }
}
