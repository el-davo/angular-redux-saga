import {releaseToggleReducer as reducer} from './release-toggle.reducer';
import {ReleaseToggleActions} from './release-toggle.actions';
import {releaseToggleState as initState, ReleaseToggleState} from './release-toggle.state';

describe('Release Toggle Reducer', () => {

  it('it should fetch release toggle', () => {
    const action = {type: ReleaseToggleActions.FETCH_RELEASE_TOGGLE};
    const state: ReleaseToggleState = {...initState, isFetchingReleaseToggle: false};

    expect(reducer(state, action)).toEqual({...state, isFetchingReleaseToggle: true});
  });

  it('should add the fetched release toggle to the store', () => {
    const action = {type: ReleaseToggleActions.FETCH_RELEASE_TOGGLE_SUCCESS, releaseToggle: {}};
    const state: ReleaseToggleState = {...initState, isFetchingReleaseToggle: true, releaseToggle: null};

    expect(reducer(state, action)).toEqual({...state, isFetchingReleaseToggle: false, releaseToggle: {}});
  });

  it('should alert the user that fetching a release toggle failed', () => {
    const action = {type: ReleaseToggleActions.FETCH_RELEASE_TOGGLE_FAILED};
    const state: ReleaseToggleState = {...initState, isFetchingReleaseToggle: true};

    expect(reducer(state, action)).toEqual({...state, isFetchingReleaseToggle: false});
  });

});
