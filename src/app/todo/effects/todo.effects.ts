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

import { TodoService } from './todo.service';
import { FETCH_TODOS } from '../todo.action-types';
import { updateTodos } from '../todo.actions';

@Injectable()
export class TodoEffects {

    constructor(private actions$: Actions, private todoService: TodoService) { }

    @Effect()
    search$: Observable<Action> = this.actions$
        .ofType(FETCH_TODOS)
        .debounceTime(300)
        .map(toPayload)
        .switchMap(() => {
            return Observable.of(updateTodos([
                { name: 'Test name', description: 'Test description' }
            ]));
        });

}