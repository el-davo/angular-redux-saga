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
import { FETCH_RELEASE_TOGGLES } from '../release-toggles.action-types';
import { updateReleaseToggles } from '../release-toggles.actions';

@Injectable()
export class ReleaseTogglesEffects {

    constructor(private actions$: Actions, private releaseTogglesService: ReleaseTogglesService) { }

    @Effect()
    search$: Observable<Action> = this.actions$
        .ofType(FETCH_RELEASE_TOGGLES)
        .map(toPayload)
        .debounceTime(1000)
        .switchMap(() => {
            return Observable.of(updateReleaseToggles([
                {
                    category: 'testCategory',
                    name: 'testName',
                    description: 'testDescription',
                    active: true,
                    created: 'Today'
                }, {
                    category: 'testCategory',
                    name: 'testName',
                    description: 'testDescription',
                    active: true,
                    created: 'Today'
                }
            ]));
        });

}