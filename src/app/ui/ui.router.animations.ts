import {trigger, animate, style, group, query, transition, state} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter', style({position:'relative', opacity: 1, width: '100%' }), { optional: true }),
    group([
      query(':enter', [
        style({opacity: 0, width:'100%'}),
        animate(300, style({opacity: 1, width:'100%'}))
      ], { optional: true }),
    ])
  ])
])