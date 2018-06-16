import { trigger, state, style, transition, animate } from '@angular/animations';

export const MenuSlideAnimation = trigger(
  'menuSlide', [
    transition(':enter', [
      style({ height: '0%', opacity: '1' }),
      animate('300ms', style({height: '115px', opacity: '1' }))
    ]),
    transition(':leave', [
      style({ height: '115px', opacity: '1'  }),
      animate('300ms', style({height: '0px' , opacity: '1' }))
    ])
  ]
);

export const FadeAnimation = trigger(
  'fade', [
    transition(':enter', [
      style({ opacity: '0' }),
      animate('300ms', style({ opacity: '1' }))
    ]),
    transition(':leave', [
      style({ opacity: '1' }),
      animate('50ms', style({ opacity: '0' }))
    ])
  ]
);
