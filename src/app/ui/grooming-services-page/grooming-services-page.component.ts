import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'grooming-services-page',
  templateUrl: './grooming-services-page.component.html',
  styleUrls: ['./grooming-services-page.component.scss']
})
export class GroomingServicesPageComponent implements OnInit, AfterViewInit {

  private fragment: string;

  constructor(private activatedRoute: ActivatedRoute, router: Router) { }

  theScroller(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
      this.theScroller();
  }

  onAnchorClick() {
    this.activatedRoute.fragment.subscribe(fragment => {
      this.fragment = fragment;
      this.theScroller();
    });
  }

}
