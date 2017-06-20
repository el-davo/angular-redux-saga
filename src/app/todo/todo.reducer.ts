import { ActionReducer, Action, State } from '@ngrx/store';
import * as actionTypes from './todo.action-types';
import { Todos, todos } from './todo.state';

export const todosReducer: ActionReducer<Todos> = (state = todos, action: Action) => {
    switch (action.type) {
        case actionTypes.FETCH_TODOS:
            return { ...state, isFetchingTodos: true };
        case actionTypes.UPDATE_TODOS:
            return { ...state, isFetchingTodos: false, list: action.payload };
        default:
            return state;
    }
}