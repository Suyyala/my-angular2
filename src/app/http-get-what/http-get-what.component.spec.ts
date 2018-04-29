import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGetWhatComponent } from './http-get-what.component';

describe('HttpGetWhatComponent', () => {
  let component: HttpGetWhatComponent;
  let fixture: ComponentFixture<HttpGetWhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpGetWhatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpGetWhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
