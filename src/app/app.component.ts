import { Routes } from '@angular/router';
import { appRoutes } from './app-routing.module';


import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.template.html',
  styleUrls: ['./app.component.styles.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  appRoutes = [];
  constructor() {}
  ngOnInit() {
    this.appRoutes = appRoutes ;
  }
}
