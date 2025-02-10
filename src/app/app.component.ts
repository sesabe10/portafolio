import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('homePage => contacPage', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('500ms ease-in', style({ opacity: 1, transform: 'translateX(0%)' }))
      ]),
      transition('contacPage => homePage', [ 
        style({ transform: 'translateX(100%)', opacity: 0 }), 
        animate('500ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
      ]),
      transition('* => *', [ 
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('800ms ease-in-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]

})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  title = 'portafolio';
}
