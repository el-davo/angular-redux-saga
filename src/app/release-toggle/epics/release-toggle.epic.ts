import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ReleaseToggleActions} from '../release-toggle.actions';
import {ReleaseTogglesService} from '../../release-toggles/epics/release-toggles.service';

@Injectable()
export class ReleaseToggleEpics {
  constructor(private releaseTogglesService: ReleaseTogglesService, private releaseToggleActions: ReleaseToggleActions) {
  }

  fetchReleaseToggle = action$ => {
    return action$.ofType(ReleaseToggleActions.FETCH_RELEASE_TOGGLE)
      .mergeMap((payload) => {
        return this.releaseTogglesService.fetchReleaseToggle(payload.id)
          .map(releaseToggle => this.releaseToggleActions.fetchReleaseToggleSuccess(releaseToggle))
          .catch(err => Observable.of(this.releaseToggleActions.fetchReleaseToggleFailed()));
      });
  };
}
