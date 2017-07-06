import {Injectable} from '@angular/core';
import {Action} from 'redux';
import * as actionTypes from './release-toggles.action-types';
import {ReleaseToggle} from './release-toggles.state';

@Injectable()
export class ReleaseTogglesActions {

  fetchReleaseToggles(): Action {
    return {type: actionTypes.FETCH_RELEASE_TOGGLES};
  }

  updateReleaseToggles(releaseToggles: ReleaseToggle[]) {
    return {type: actionTypes.UPDATE_RELEASE_TOGGLES, releaseToggles};
  }

  fetchReleaseTogglesFailed(): Action {
    return {type: actionTypes.FETCH_RELEASE_TOGGLES_FAILED};
  }

  showEditToggleModal(releaseToggle: ReleaseToggle) {
    return {type: actionTypes.SHOW_EDIT_TOGGLE_MODAL, releaseToggle};
  }

  hideEditToggleModal(): Action {
    return {type: actionTypes.HIDE_EDIT_TOGGLE_MODAL};
  }

  editToggleCategoryChange(value: string) {
    return {type: actionTypes.EDIT_TOGGLE_CATEGORY_CHANGE, value};
  }

  editToggleNameChange(value: string) {
    return {type: actionTypes.EDIT_TOGGLE_NAME_CHANGE, value};
  }

  editToggleDescriptionChange(value: string) {
    return {type: actionTypes.EDIT_TOGGLE_DESCRIPTION_CHANGE, value};
  }

  editToggleActiveChange(): Action {
    return {type: actionTypes.EDIT_TOGGLE_ACTIVE_CHANGED};
  }

  requestToggleEdit() {
    return {type: actionTypes.REQUEST_TOGGLE_EDIT};
  }

  requestToggleEditSuccess(releaseToggle: ReleaseToggle) {
    return {type: actionTypes.REQUEST_TOGGLE_EDIT_SUCCESS, releaseToggle};
  }
}
