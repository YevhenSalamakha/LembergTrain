import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public isMenuOpen = false;

  public toggleMenu(value: boolean): void {
    this.isMenuOpen = value;
    const body = document.getElementsByTagName('body')[0];

    if (value) {
      body.classList.add('menu-open');
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      body.classList.remove('menu-open');
    }
  }
}
