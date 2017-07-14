import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import {TestBed, async, inject} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpModule} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ReleaseToggleActions} from '../release-toggle.actions';
import {ReleaseTogglesService} from '../../release-toggles/epics/release-toggles.service';
import {ReleaseToggleEpics} from './release-toggle.epic';
import {ActionsObservable} from 'redux-observable';

describe('Release Toggle Epics', () => {

  let releaseToggleEpics;
  let releaseTogglesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        HttpModule
      ],
      providers: [
        ReleaseToggleEpics,
        ReleaseTogglesService,
        ReleaseToggleActions
      ]
    }).compileComponents();
  }));

  beforeEach(inject([ReleaseToggleEpics, ReleaseTogglesService], (_releaseToggleEpics_, _releaseTogglesService_) => {
    releaseToggleEpics = _releaseToggleEpics_;
    releaseTogglesService = _releaseTogglesService_;
  }));

  it('should fetch a release toggle', done => {
    spyOn(releaseTogglesService, 'fetchReleaseToggle').and.returnValue(Observable.of({}));

    const action$ = ActionsObservable.of({type: ReleaseToggleActions.FETCH_RELEASE_TOGGLE});
    const expectedActions = {type: ReleaseToggleActions.FETCH_RELEASE_TOGGLE_SUCCESS, releaseToggle: {}};

    releaseToggleEpics.fetchReleaseToggle(action$)
      .subscribe(actions => {
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should alert the user when the fetch fails', done => {
    spyOn(releaseTogglesService, 'fetchReleaseToggle').and.returnValue(Observable.throw(''));

    const action$ = ActionsObservable.of({type: ReleaseToggleActions.FETCH_RELEASE_TOGGLE});
    const expectedActions = {type: ReleaseToggleActions.FETCH_RELEASE_TOGGLE_FAILED};

    releaseToggleEpics.fetchReleaseToggle(action$)
      .subscribe(actions => {
        expect(actions).toEqual(expectedActions);
        done();
      });
  });
});
