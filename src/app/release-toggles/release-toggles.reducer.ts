import { ActionReducer, Action, State } from '@ngrx/store';
import * as actionTypes from './release-toggles.action-types';
import { ReleaseToggleState, releaseToggleState } from './release-toggles.state';

export const releaseTogglesReducer: ActionReducer<ReleaseToggleState> = (state = releaseToggleState, action: Action) => {
    switch (action.type) {
        case actionTypes.FETCH_RELEASE_TOGGLES:
            return { ...state, isFetchingReleaseToggles: true };
        case actionTypes.UPDATE_RELEASE_TOGGLES:
            return { ...state, isFetchingReleaseToggles: false, releaseToggles: action.payload };
        case actionTypes.FETCH_RELEASE_TOGGLES_FAILED:
            return { ...state, isFetchingReleaseToggles: false };
        case actionTypes.SHOW_EDIT_TOGGLE_MODAL:
            return { ...state, showEditToggleModal: true, editReleaseToggle: action.payload };
        case actionTypes.HIDE_EDIT_TOGGLE_MODAL:
            return { ...state, showEditToggleModal: false, editReleaseToggle: null };
        default:
            return state;
    }
}