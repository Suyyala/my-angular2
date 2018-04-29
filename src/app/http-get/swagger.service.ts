import { LanguageData } from './language.data';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SwaggerService {

  constructor(private httpClient: HttpClient  ) { }
  getLanguages() {
    return this.httpClient.get<Array<LanguageData>>('https://languagetool.org/api/v2/languages');
  }

}
