import { MaterialsModule } from './../materials.module';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-http-get-path',
  template: `
    <mat-list>
    <mat-list-item *ngFor='let post of posts' (click)='showPost(post.id)'>
    {{post.title}}
    </mat-list-item>
    <mat-list>
    {{post | json}}
  `,
  styles: []
})
export class HttpGetPathComponent implements OnInit {
  posts = [];
  post = {};

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    return this.httpClient.get<any>('http://jsonplaceholder.typicode.com/posts').subscribe(
      res => {
        this.posts = res;
} );
  }

  showPost(postId: number) {
    this.httpClient.get<any>(`http://jsonplaceholder.typicode.com/posts/${postId}`).subscribe(
         res => {
           this.post = res;
    } );
  }

}
