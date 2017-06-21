import { todosReducer as todos } from './todo/todo.reducer';
import { releaseTogglesReducer as releaseToggles } from './release-toggles/release-toggles.reducer';

export const rootReducer = {
    todos,
    releaseToggles
}