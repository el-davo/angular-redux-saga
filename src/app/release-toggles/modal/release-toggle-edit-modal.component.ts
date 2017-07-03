import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { ReleaseToggleState, ReleaseToggle } from '../release-toggles.state';
import { hideEditToggleModal, editToggleCategoryChange, editToggleNameChange, editToggleDescriptionChange, editToggleActiveChange, requestToggleEdit } from '../release-toggles.actions';

@Component({
    selector: 'app-release-toggle-edit-modal',
    templateUrl: './release-toggle-edit-modal.component.html',
    styleUrls: []
})
export class ReleaseToggleEditModalComponent {

    public releaseToggles: ReleaseToggleState;

    constructor(private _store: Store<State<ReleaseToggleState>>) {
        _store.select('releaseToggles').subscribe(state => this.releaseToggles = state as ReleaseToggleState);
    }

    hideEditToggleModal() {
        this._store.dispatch(hideEditToggleModal());
    }

    updateToggleCategory(value: string) {
        this._store.dispatch(editToggleCategoryChange(value));
    }

    updateToggleName(value: string) {
        this._store.dispatch(editToggleNameChange(value));
    }

    updateToggleDescription(value: string) {
        this._store.dispatch(editToggleDescriptionChange(value));
    }

    updateToggleActive() {
        this._store.dispatch(editToggleActiveChange());
    }

    requestToggleEdit() {
        this._store.dispatch(requestToggleEdit(this.releaseToggles.editReleaseToggle));
        this.hideEditToggleModal();
    }
}
