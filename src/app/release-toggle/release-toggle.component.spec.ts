import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MockNgRedux} from '@angular-redux/store/testing';
import {ActivatedRoute} from '@angular/router';
import {ReleaseToggleComponent} from './release-toggle.component';
import {ReleaseToggleActions} from './release-toggle.actions';

describe('ReleaseToggleComponent', () => {

  const RELEASE_TOGGLE_ID = '10';

  let component: ReleaseToggleComponent;
  let fixture: ComponentFixture<ReleaseToggleComponent>;
  let store;

  beforeEach(async(() => {
    MockNgRedux.reset();
    TestBed.configureTestingModule({
      declarations: [ReleaseToggleComponent],
      providers: [
        ReleaseToggleActions,
        {provide: ActivatedRoute, useValue: {snapshot: {params: {id: RELEASE_TOGGLE_ID}}}}
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReleaseToggleComponent);
    component = fixture.componentInstance;
    store = MockNgRedux.getSelectorStub('releaseToggle');
  }));

  describe('layout', () => {

  });

  describe('actions', () => {

    let fetchReleaseToggleSpy;

    beforeEach(() => {
      const releaseToggleActions = fixture.debugElement.injector.get(ReleaseToggleActions);
      fetchReleaseToggleSpy = spyOn(releaseToggleActions, 'fetchReleaseToggle');
    });

    it('should request a release toggle when loaded', () => {
      fixture.detectChanges();
      expect(fetchReleaseToggleSpy).toHaveBeenCalledWith(RELEASE_TOGGLE_ID);
    });
  });
});
