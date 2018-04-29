import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGetPathComponent } from './http-get-path.component';

describe('HttpGetPathComponent', () => {
  let component: HttpGetPathComponent;
  let fixture: ComponentFixture<HttpGetPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpGetPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpGetPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
