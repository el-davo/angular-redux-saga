import { Component, OnInit } from '@angular/core';
import { State, Store } from "@ngrx/store";
import { Todos } from './todo.state';
import { fetchTodos } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Todos;

  constructor(private _store: Store<State<Todos>>) {
    _store.select('todos').subscribe(state => this.todos = state as Todos);
  }

  ngOnInit() {
    this._store.dispatch(fetchTodos());
  }

}
