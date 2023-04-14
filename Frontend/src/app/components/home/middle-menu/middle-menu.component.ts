import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Hammer from 'hammerjs';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-middle-menu',
  templateUrl: './middle-menu.component.html',
  styleUrls: ['./middle-menu.component.scss']
})
export class MiddleMenuComponent implements AfterViewInit {
  @ViewChild('carousel', { static: false }) carousel!: NgbCarousel;
  @ViewChild('carouselElement', { static: false }) carouselElement!: ElementRef;
  hammer!: HammerManager;

  ngAfterViewInit() {
    this.hammer = new Hammer(this.carouselElement.nativeElement);
    this.hammer.on('swipeleft', () => this.carousel.next());
    this.hammer.on('swiperight', () => this.carousel.prev());
  }
}
