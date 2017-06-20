export const todos = {
    isFetchingTodos: false,
    list: []
}

export interface Todos {
    isFetchingTodos: boolean;
    list: Todo[];
}

export interface Todo {
    name: string;
    description: string;
}