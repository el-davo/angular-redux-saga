import {Injectable} from '@angular/core';
import {ReleaseToggle} from '../release-toggles/release-toggles.state';

@Injectable()
export class ReleaseToggleActions {

  public static FETCH_RELEASE_TOGGLE = 'FETCH_RELEASE_TOGGLE';
  public static FETCH_RELEASE_TOGGLE_SUCCESS = 'FETCH_RELEASE_TOGGLE_SUCCESS';
  public static FETCH_RELEASE_TOGGLE_FAILED = 'FETCH_RELEASE_TOGGLE_FAILED';

  fetchReleaseToggle(id: string) {
    return {type: ReleaseToggleActions.FETCH_RELEASE_TOGGLE, id};
  }

  fetchReleaseToggleSuccess(releaseToggle: ReleaseToggle) {
    return {type: ReleaseToggleActions.FETCH_RELEASE_TOGGLE_SUCCESS, releaseToggle};
  }

  fetchReleaseToggleFailed() {
    return {type: ReleaseToggleActions.FETCH_RELEASE_TOGGLE_FAILED};
  }
}
