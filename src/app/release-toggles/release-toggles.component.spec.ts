import {TestBed, async} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NgReduxTestingModule, MockNgRedux} from '@angular-redux/store/testing';
import {ReleaseTogglesComponent} from './release-toggles.component';
import {ReleaseTogglesActions} from './release-toggles.actions';

describe('ReleaseTogglesComponent', () => {
  let fixture;
  let component;
  let compiled;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NgReduxTestingModule],
      declarations: [
        ReleaseTogglesComponent
      ],
      providers: [
        ReleaseTogglesActions
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ReleaseTogglesComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    MockNgRedux.reset();
    store = MockNgRedux.getSelectorStub('releaseToggles');
  }));

  describe('layout', () => {

    it('should show a release toggles table', async(() => {
      expect(compiled.querySelector('clr-datagrid')).toBeTruthy();
    }));

    it('should show correct data in the table and footer', async(() => {
      store.next({releaseToggles: [{}, {}]});
      store.complete();
      fixture.detectChanges();

      expect(compiled.querySelectorAll('clr-dg-row').length).toBe(2);
      expect(compiled.querySelectorAll('clr-dg-cell').length).toBe(10);
      expect(compiled.querySelector('clr-dg-footer').innerHTML).toBe('2 Release Toggles');
    }));
  });

});
