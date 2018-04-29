import { Component, OnInit } from '@angular/core';
import { LanguageData } from './language.data';
import { SwaggerService } from './swagger.service';

@Component({
  selector: 'app-http-get',
  template: `
    <h2>Countries:<h2>
    <ul>
      <li *ngFor="let language of languages">
        {{language.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class HttpGetComponent implements OnInit {

  languages: Array<LanguageData> = [];
  constructor(private swaggerService: SwaggerService) {}
  ngOnInit() {
    this.swaggerService.getLanguages().subscribe(
      res => {
        this.languages = res;
      },
      error => {
        console.log('error');
      }
    );
  }

}
