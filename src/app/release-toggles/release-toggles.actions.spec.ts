import {ReleaseToggle} from './release-toggles.state';
import * as actionTypes from './release-toggles.action-types';
import {ReleaseTogglesActions} from './release-toggles.actions';

describe('Release Toggles Actions', () => {

  let actions;

  beforeEach(() => {
    actions = new ReleaseTogglesActions();
  });

  it('should fetch release toggles', () => {
    expect(actions.fetchReleaseToggles()).toEqual({type: actionTypes.FETCH_RELEASE_TOGGLES});
  });

  it('should update release toggles', () => {
    const releaseToggles = [{}, {}] as ReleaseToggle[];
    expect(actions.updateReleaseToggles(releaseToggles)).toEqual({
      type: actionTypes.UPDATE_RELEASE_TOGGLES,
      releaseToggles
    });
  });

  it('should alert the user that fetching release toggles failed', () => {
    expect(actions.fetchReleaseTogglesFailed()).toEqual({type: actionTypes.FETCH_RELEASE_TOGGLES_FAILED});
  });

  it('should show the edit toggle modal', () => {
    const releaseToggle = {active: true} as ReleaseToggle;
    expect(actions.showEditToggleModal(releaseToggle)).toEqual({
      type: actionTypes.SHOW_EDIT_TOGGLE_MODAL,
      releaseToggle
    });
  });

  it('should hide the edit toggle modal', () => {
    expect(actions.hideEditToggleModal()).toEqual({type: actionTypes.HIDE_EDIT_TOGGLE_MODAL});
  });

  it('should edit toggle', () => {
    expect(actions.requestToggleEdit()).toEqual({type: actionTypes.REQUEST_TOGGLE_EDIT});
  });

  it('should let us know when toggle has been edited successfully', () => {
    const releaseToggle = {active: true} as ReleaseToggle;
    expect(actions.requestToggleEditSuccess(releaseToggle)).toEqual({
      type: actionTypes.REQUEST_TOGGLE_EDIT_SUCCESS,
      releaseToggle
    });
  });
});
