import {TestBed, async} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let component;
  let app;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    component = TestBed.createComponent(AppComponent);
    app = component.debugElement.componentInstance;
    compiled = component.debugElement.nativeElement;
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should render a header component`, async(() => {
    expect(compiled.querySelector('header')).toBeTruthy();
  }));

  it('should render a release toggles component', async() => {
    expect(compiled.querySelector('app-release-toggles')).toBeTruthy();
  });

});
