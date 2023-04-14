import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const ripple = trigger('ripple', [
  transition(':enter', [
    animate('0.8s ease-in-out', keyframes([
      style({ opacity: 0.5, transform: 'scale(0.5)', offset: 0 }),
      style({ opacity: 0.7, transform: 'scale(0.7)', offset: 0.7 }),
      style({ opacity: 1, transform: 'scale(1.0)', offset: 1 })
    ]))
  ])
]);
