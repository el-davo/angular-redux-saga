import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ReleaseTogglesService} from './release-toggles.service';
import {FETCH_RELEASE_TOGGLES, REQUEST_TOGGLE_EDIT} from '../release-toggles.action-types';
import {ReleaseTogglesActions} from '../release-toggles.actions';
import {ReleaseToggle} from '../release-toggles.state';

@Injectable()
export class ReleaseTogglesEpics {
  constructor(private releaseTogglesService: ReleaseTogglesService, private releaseTogglesActions: ReleaseTogglesActions) {
  }

  fetchReleaseToggles = action$ => {
    return action$.ofType(FETCH_RELEASE_TOGGLES)
      .mergeMap(() => {
        return this.releaseTogglesService.fetchReleaseToggles()
          .map(releaseToggles => this.releaseTogglesActions.updateReleaseToggles(releaseToggles))
          .catch(err => Observable.of(this.releaseTogglesActions.fetchReleaseTogglesFailed()));
      });
  };

  editReleaseToggle = (action$, store) => {
    return action$.ofType(REQUEST_TOGGLE_EDIT)
      .mergeMap(() => {
        const releaseToggle = store.getState().releaseToggles.editReleaseToggle;
        return Observable.concat(
          Observable.of(this.releaseTogglesActions.requestToggleEditSuccess(releaseToggle as ReleaseToggle)),
          Observable.of(this.releaseTogglesActions.hideEditToggleModal())
        );
      });
  };
}
