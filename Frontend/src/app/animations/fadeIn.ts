import { trigger, state, style, animate, group, transition, keyframes } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate(1000)
    ])
]);
