import {ReleaseToggleState, releaseToggleState} from './release-toggle.state';
import {ReleaseToggleActions} from './release-toggle.actions';

export const releaseToggleReducer = (state: ReleaseToggleState = releaseToggleState, action) => {
  switch (action.type) {
    case ReleaseToggleActions.FETCH_RELEASE_TOGGLE:
      return {...state, isFetchingReleaseToggle: true};
    case ReleaseToggleActions.FETCH_RELEASE_TOGGLE_SUCCESS:
      return {...state, isFetchingReleaseToggle: false, releaseToggle: action.releaseToggle};
    case ReleaseToggleActions.FETCH_RELEASE_TOGGLE_FAILED:
      return {...state, isFetchingReleaseToggle: false};
    default:
      return state;
  }
};
