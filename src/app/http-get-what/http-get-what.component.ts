import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-get-what',
  template: `
    <div>
    <input [(ngModel)]="searchCity" placeholder="city">
    <button (click)="searchByUrlParams()">searchByUrl
    </button>
    <button (click)="searchByHttpParams()">searchByHttpParams
    </button>
    <button (click)="searchByHttpParams2()">searchByHttpParams2
    </button>
    <p> JSON {{searchResult | json}}</p>
    </div>
  `,
  styles: []
})
export class HttpGetWhatComponent implements OnInit {
  searchCity: string;
  searchResult  = {};

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  searchByUrlParams() {
    console.log('Search by city: ' + this.searchCity);
    const concatenatedUrl: string =
         'https://trailapi-trailapi.p.mashape.com?q[city_cont]=' +
         encodeURIComponent(this.searchCity);
       const mashapeKey =
   'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
       const httpHeaders: HttpHeaders = new HttpHeaders(
         {'Content-Type': 'application/json',
        'X-Mashape-Key': mashapeKey});

      this.httpClient.get(concatenatedUrl, { headers: httpHeaders }).subscribe( res => { this.searchResult = res; });
  }

  searchByHttpParams() {
    console.log('Search By HttpParams: ' + this.searchCity);

    const url = 'https://trailapi-trailapi.p.mashape.com';
       const mashapeKey = 'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
       const httpHeaders: HttpHeaders = new HttpHeaders(
         {'Content-Type': 'application/json',
        'X-Mashape-Key': mashapeKey});
      const httpParams: HttpParams = new HttpParams ({
        fromString: 'q[city_cont]=' + this.searchCity,
      });

      this.httpClient.get(url, { headers: httpHeaders, params: httpParams }).subscribe( res => { this.searchResult = res; });
  }

  searchByHttpParams2() {
    console.log('Search By HttpParams2: ' + this.searchCity);

    const url = 'https://trailapi-trailapi.p.mashape.com';
       const mashapeKey = 'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
       const httpHeaders: HttpHeaders = new HttpHeaders(
         {'Content-Type': 'application/json',
        'X-Mashape-Key': mashapeKey});
      const httpParams: HttpParams = new HttpParams().set('q[city_cont]', this.searchCity);

      this.httpClient.get(url, { headers: httpHeaders, params: httpParams }).subscribe( res => { this.searchResult = res; });
  }

}
