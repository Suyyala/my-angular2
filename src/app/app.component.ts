

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <a routerLink='http-get'>http-get</a>
    <a routerLink='http-get-what'>http-get-what</a>
    <a routerLink='http-get-path'>http-get-path</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor() {}
  ngOnInit() {
  }
}
