import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appWindowScroll]'
})
export class WindowScrollDirective {

  constructor() { }

  @HostBinding('class.navbar-scrolled') isScrolled : boolean = false;
  @HostListener('window:scroll') onWindowScroll() {
    this.isScrolled = window.scrollY >  20;
  }

}
