import { ReleaseToggle } from './release-toggles.state';
import * as actionTypes from './release-toggles.action-types';
import * as actions from './release-toggles.actions';

describe('Release Toggles Actions', () => {

    it('should fetch release toggles', () => {
        expect(actions.fetchReleaseToggles()).toEqual({ type: actionTypes.FETCH_RELEASE_TOGGLES });
    });

    it('should update release toggles', () => {
        let toggles = [{}, {}] as ReleaseToggle[];
        expect(actions.updateReleaseToggles(toggles)).toEqual({ type: actionTypes.UPDATE_RELEASE_TOGGLES, payload: toggles });
    });

    it('should alert the user that fetching release toggles failed', () => {
        expect(actions.fetchReleaseTogglesFailed()).toEqual({ type: actionTypes.FETCH_RELEASE_TOGGLES_FAILED });
    });

    it('should show the edit toggle modal', () => {
        let toggle = { active: true } as ReleaseToggle;
        expect(actions.showEditToggleModal(toggle)).toEqual({ type: actionTypes.SHOW_EDIT_TOGGLE_MODAL, payload: toggle });
    });

});