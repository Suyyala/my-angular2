import { HttpGetPathComponent } from './http-get-path/http-get-path.component';
import { HttpGetWhatComponent } from './http-get-what/http-get-what.component';
import { HttpGetComponent } from './http-get/http-get.component';
import { AppComponent } from './app.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { METHODS } from 'http';



export const  appRoutes: Routes = [
  // {path : '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'http-get', component: HttpGetComponent},
  {path: 'http-get-what', component: HttpGetWhatComponent},
  {path: 'http-get-path', component: HttpGetPathComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule {
}
