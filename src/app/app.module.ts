import { HttpGetPathComponent } from './http-get-path/http-get-path.component';
import { SwaggerService } from './http-get/swagger.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpGetComponent } from './http-get/http-get.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpGetWhatComponent } from './http-get-what/http-get-what.component';

import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HttpGetComponent,
    HttpGetWhatComponent,
    HttpGetPathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SwaggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
