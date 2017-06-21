import * as actionTypes from './release-toggles.action-types';
import { ReleaseToggle } from './release-toggles.state';

export function fetchReleaseToggles() {
    return { type: actionTypes.FETCH_RELEASE_TOGGLES };
}

export function updateReleaseToggles(releaseToggles: ReleaseToggle[]) {
    return { type: actionTypes.UPDATE_RELEASE_TOGGLES, payload: releaseToggles };
}

export function fetchReleaseTogglesFailed() {
    return { type: actionTypes.FETCH_RELEASE_TOGGLES_FAILED };
}

export function showEditToggleModal(releaseToggle: ReleaseToggle) {
    return { type: actionTypes.SHOW_EDIT_TOGGLE_MODAL, payload: releaseToggle };
}

export function hideEditToggleModal() {
    return { type: actionTypes.HIDE_EDIT_TOGGLE_MODAL };
}