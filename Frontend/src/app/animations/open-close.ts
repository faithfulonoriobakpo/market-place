import { trigger, state, style, animate, group, transition, keyframes } from '@angular/animations';

export const openClose = trigger('openClose', [
    // transition(':enter', [
    //     group([
    //         animate('0.1s ease-in-out', style({transform: 'translate(0, -100%)', opacity: 0.3})),
    //     ])
    // ])
]);
