import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { ReleaseTogglesService } from './release-toggles.service';
import { FETCH_RELEASE_TOGGLES, REQUEST_TOGGLE_EDIT } from '../release-toggles.action-types';
import { updateReleaseToggles, requestToggleEditSuccess, fetchReleaseTogglesFailed } from '../release-toggles.actions';

@Injectable()
export class ReleaseTogglesEffects {

    @Effect()
    getReleaseToggles$: Observable<Action> = this.actions$
        .ofType(FETCH_RELEASE_TOGGLES)
        .map(toPayload)
        .debounceTime(1000)
        .switchMap(() => {
            return this.releaseTogglesService.fetchReleaseToggles()
                .map(releaseToggles => updateReleaseToggles(releaseToggles))
                .catch(err => Observable.of(fetchReleaseTogglesFailed()));
        });

    @Effect()
    editReleaseToggle$: Observable<Action> = this.actions$
        .ofType(REQUEST_TOGGLE_EDIT)
        .map(toPayload)
        .debounceTime(1000)
        .switchMap((releaseToggle) => {
            return Observable.of(requestToggleEditSuccess(releaseToggle));
        });

    constructor(private actions$: Actions, private releaseTogglesService: ReleaseTogglesService) { }

}
