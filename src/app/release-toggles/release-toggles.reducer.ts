import * as actionTypes from './release-toggles.action-types';
import {ReleaseToggleState, releaseToggleState} from './release-toggles.state';

export const releaseTogglesReducer = (state: ReleaseToggleState = releaseToggleState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RELEASE_TOGGLES:
      return {...state, isFetchingReleaseToggles: true};
    case actionTypes.UPDATE_RELEASE_TOGGLES:
      return {...state, isFetchingReleaseToggles: false, releaseToggles: action.releaseToggles};
    case actionTypes.FETCH_RELEASE_TOGGLES_FAILED:
      return {...state, isFetchingReleaseToggles: false};
    case actionTypes.SHOW_EDIT_TOGGLE_MODAL:
      return {...state, showEditToggleModal: true, editReleaseToggle: action.releaseToggle};
    case actionTypes.HIDE_EDIT_TOGGLE_MODAL:
      return {...state, showEditToggleModal: false, editReleaseToggle: {}};
    case actionTypes.REQUEST_TOGGLE_EDIT_SUCCESS:
      return {
        ...state,
        releaseToggles: state.releaseToggles.map((releaseToggle) => {
          return releaseToggle.id === action.releaseToggle.id ? action.releaseToggle : releaseToggle;
        })
      };
    default:
      return state;
  }
};
