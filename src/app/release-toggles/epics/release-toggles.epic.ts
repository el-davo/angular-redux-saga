import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ReleaseTogglesService} from './release-toggles.service';
import {FETCH_RELEASE_TOGGLES} from '../release-toggles.action-types';
import {ReleaseTogglesActions} from '../release-toggles.actions';

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
  }
}
