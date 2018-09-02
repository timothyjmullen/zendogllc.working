import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  private fragment: string;

  constructor(private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      console.log(this.fragment);
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
