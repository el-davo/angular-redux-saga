import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toArray';
import {TestBed, async, inject} from '@angular/core/testing';
import {ReleaseTogglesEpics} from './release-toggles.epic';
import {ReleaseTogglesService} from './release-toggles.service';
import {HttpModule} from '@angular/http';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ReleaseTogglesActions} from '../release-toggles.actions';
import {ActionsObservable} from 'redux-observable';
import * as actionTypes from '../release-toggles.action-types';
import {Observable} from 'rxjs/Observable';

describe('ReleaseTogglesEpics', () => {

  let store;
  let releaseTogglesEpics;
  let releaseTogglesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        HttpModule
      ],
      providers: [
        ReleaseTogglesEpics,
        ReleaseTogglesService,
        ReleaseTogglesActions
      ]
    }).compileComponents();

    store = {
      getState: () => {
        return {releaseToggles: {editReleaseToggle: {}}}
      }
    };
  }));

  beforeEach(inject([ReleaseTogglesEpics, ReleaseTogglesService], (_releaseTogglesEpics_, _releaseTogglesService_) => {
    releaseTogglesEpics = _releaseTogglesEpics_;
    releaseTogglesService = _releaseTogglesService_;
  }));

  describe('fetch release toggles', () => {

    it('should dispatch the correct action when successful', done => {
      spyOn(releaseTogglesService, 'fetchReleaseToggles').and.returnValue(Observable.of([{}, {}]));
      const action$ = ActionsObservable.of({type: actionTypes.FETCH_RELEASE_TOGGLES});
      const expectedActions = [{type: actionTypes.UPDATE_RELEASE_TOGGLES, releaseToggles: [{}, {}]}];

      releaseTogglesEpics.fetchReleaseToggles(action$)
        .toArray()
        .subscribe(actions => {
          expect(actions).toEqual(expectedActions);
          done();
        });
    });

    it('should dispatch the correct action when fetching fails', done => {
      spyOn(releaseTogglesService, 'fetchReleaseToggles').and.returnValue(Observable.throw(''));
      const action$ = ActionsObservable.of({type: actionTypes.FETCH_RELEASE_TOGGLES});
      const expectedActions = [{type: actionTypes.FETCH_RELEASE_TOGGLES_FAILED}];

      releaseTogglesEpics.fetchReleaseToggles(action$)
        .toArray()
        .subscribe(actions => {
          expect(actions).toEqual(expectedActions);
          done();
        });
    });
  });

  describe('Edit release toggle', () => {

    it('should dispatch the correct actions when completed', () => {
      const action$ = ActionsObservable.of({type: actionTypes.REQUEST_TOGGLE_EDIT});
      const expectedActions = [
        {type: actionTypes.REQUEST_TOGGLE_EDIT_SUCCESS, releaseToggle: {}},
        {type: actionTypes.HIDE_EDIT_TOGGLE_MODAL}
      ];

      releaseTogglesEpics.editReleaseToggle(action$, store)
        .toArray()
        .subscribe(actions => {
          expect(actions).toEqual(expectedActions);
        });
    });
  });
});
