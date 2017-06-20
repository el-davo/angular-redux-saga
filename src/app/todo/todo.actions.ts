import * as actionTpes from './todo.action-types';
import { Todo } from './todo.state';

export function fetchTodos() {
    return { type: actionTpes.FETCH_TODOS };
}

export function updateTodos(todos: Todo[]) {
    return { type: actionTpes.UPDATE_TODOS, payload: todos };
}