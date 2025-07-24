import { trigger, state, style, transition, animate, query, group, animateChild } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0, transform: 'translateX(100%)' })
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0%)' }))
      ], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true }),
  ])
]);

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('600ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-20px)' }))
  ])
]);

export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate('400ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);

export const slideUp = trigger('slideUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(50px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const cardFlip = trigger('cardFlip', [
  state('front', style({ transform: 'rotateY(0deg)' })),
  state('back', style({ transform: 'rotateY(180deg)' })),
  transition('front => back', [
    animate('600ms ease-in-out')
  ]),
  transition('back => front', [
    animate('600ms ease-in-out')
  ])
]);

export const staggerChildren = trigger('staggerChildren', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      animate('300ms {{delay}}ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ], { optional: true })
  ])
]);
