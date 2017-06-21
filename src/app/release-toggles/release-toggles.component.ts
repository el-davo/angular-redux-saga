import { Component, OnInit } from '@angular/core';
import { State, Store } from "@ngrx/store";
import { ReleaseToggleState, ReleaseToggle } from './release-toggles.state';
import { fetchReleaseToggles, showEditToggleModal } from './release-toggles.actions';

@Component({
    selector: 'app-release-toggles',
    templateUrl: './release-toggles.component.html',
    styleUrls: []
})
export class ReleaseTogglesComponent implements OnInit {

    public releaseToggles: ReleaseToggleState;

    constructor(private _store: Store<State<ReleaseToggleState>>) {
        _store.select('releaseToggles').subscribe(state => this.releaseToggles = state as ReleaseToggleState);
    }

    ngOnInit() {
        this._store.dispatch(fetchReleaseToggles());
    }

    showEditToggleModal(releaseToggle: ReleaseToggle) {
        this._store.dispatch(showEditToggleModal(releaseToggle));
    }

}
