import { toPayload } from '@ngrx/effects';
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

export function editToggleCategoryChange(value: string) {
    return { type: actionTypes.EDIT_TOGGLE_CATEGORY_CHANGE, payload: value };
}

export function editToggleNameChange(value: string) {
    return { type: actionTypes.EDIT_TOGGLE_NAME_CHANGE, payload: value };
}

export function editToggleDescriptionChange(value: string) {
    return { type: actionTypes.EDIT_TOGGLE_DESCRIPTION_CHANGE, payload: value };
}

export function editToggleActiveChange() {
    return { type: actionTypes.EDIT_TOGGLE_ACTIVE_CHANGED };
}

export function requestToggleEdit(releaseToggle: ReleaseToggle) {
    return { type: actionTypes.REQUEST_TOGGLE_EDIT, payload: releaseToggle };
}

export function requestToggleEditSuccess(releaseToggle: ReleaseToggle) {
    return { type: actionTypes.REQUEST_TOGGLE_EDIT_SUCCESS, payload: releaseToggle };
}

export function requestToggleEditFailed(releaseToggle: ReleaseToggle) {
    return { type: actionTypes.REQUEST_TOGGLE_EDIT_FAILED, payload: releaseToggle };
}
