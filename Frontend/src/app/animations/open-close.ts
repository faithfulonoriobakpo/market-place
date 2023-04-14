import { trigger, state, style, animate, transition } from '@angular/animations';

export const openClose = trigger('openClose', [
  state('open', style({
    transform: 'scale(1)'
  })),
  state('closed', style({
    transform: 'scale(0)'
  })),
  transition('open => closed', [
    animate('0.5s ease-in-out')
  ]),
  transition('closed => open', [
    animate('0.5s ease-in-out')
  ])
]);
