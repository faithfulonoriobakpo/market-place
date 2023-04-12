import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarColor = 'transparent';
  navbarPosition = 'fixed';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const position = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (position >= 50) {
      this.navbarColor = '#fff';
      this.navbarPosition = 'fixed';
    } else {
      this.navbarColor = 'transparent';
      this.navbarPosition = 'fixed';
    }
  }

}
