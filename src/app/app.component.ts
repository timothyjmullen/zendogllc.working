import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';  
import { routerTransition } from './ui/ui.router.animations';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ]
})
export class AppComponent {

  theSpinThing:boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    this.setTitle();
  }

  /* Set Title Based On Route */
  setTitle() {
    this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => this.activatedRoute),
    map((route: any) => {
        while (route.firstChild) route = route.firstChild;
        return route;
    }),
    filter((route) => route.outlet === 'primary'),
    mergeMap((route: any) => route.data)).subscribe((event) => {
        this.titleService.setTitle('Zen Dog Grooming, LLC – ' + event['title']);
    })
  }

  /* Get router state for animation */
  getState(outlet) { 
    console.log( outlet.activatedRouteData.title)
    return outlet.activatedRouteData.title;
    
  }
}
