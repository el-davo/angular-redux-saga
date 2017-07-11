import * as actionTypes from './release-toggles.action-types';
import {ReleaseToggleState, releaseToggleState} from './release-toggles.state';
import {releaseTogglesReducer} from './release-toggles.reducer';

describe('Release Toggles Reducer', () => {

  it('should start fetching release toggles', () => {
    const action = {type: actionTypes.FETCH_RELEASE_TOGGLES};
    expect(releaseTogglesReducer(releaseToggleState, action)).toEqual({
      ...releaseToggleState,
      isFetchingReleaseToggles: true
    });
  });

  it('should finish fetching release toggles successfully', () => {
    const action = {type: actionTypes.UPDATE_RELEASE_TOGGLES, releaseToggles: [{}]};
    expect(releaseTogglesReducer(releaseToggleState, action)).toEqual({
      ...releaseToggleState,
      releaseToggles: [{}],
      isFetchingReleaseToggles: false
    });
  });

  it('should indicate fetching release toggles failed', () => {
    const action = {type: actionTypes.FETCH_RELEASE_TOGGLES_FAILED};
    expect(releaseTogglesReducer(releaseToggleState, action)).toEqual({
      ...releaseToggleState,
      isFetchingReleaseToggles: false
    });
  });

  it('should show edit toggle modal', () => {
    const action = {type: actionTypes.SHOW_EDIT_TOGGLE_MODAL, releaseToggle: {}};
    expect(releaseTogglesReducer(releaseToggleState, action)).toEqual({
      ...releaseToggleState,
      editReleaseToggle: {},
      showEditToggleModal: true
    });
  });

  it('should hide edit toggle modal', () => {
    const state = {...releaseToggleState, showEditToggleModal: true};
    const action = {type: actionTypes.HIDE_EDIT_TOGGLE_MODAL};
    expect(releaseTogglesReducer(state, action)).toEqual({
      ...releaseToggleState,
      showEditToggleModal: false,
      editReleaseToggle: {}
    });
  });

  it('should indicate toggle edit succeeded', () => {
    const state = {...releaseToggleState, releaseToggles: [{id: '1'}, {id: '2'}]} as ReleaseToggleState;
    const action = {type: actionTypes.REQUEST_TOGGLE_EDIT_SUCCESS, releaseToggle: {id: '2', name: 'abc'}};
    expect(releaseTogglesReducer(state, action)).toEqual({
      ...releaseToggleState,
      releaseToggles: [{id: '1'}, {id: '2', name: 'abc'}]
    });
  });

  it('should return initial state for unknown actions', () => {
    const action = {type: 'UNKNOWN_ACTION'};
    expect(releaseTogglesReducer(undefined, action)).toEqual(releaseToggleState);
  });

});
