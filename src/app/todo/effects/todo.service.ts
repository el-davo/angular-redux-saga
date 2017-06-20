import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../todo.state';

@Injectable()
export class TodoService {

    constructor(private http: Http) { }

    fetchTodos(queryTitle: string): Observable<Todo[]> {
        return this.http.get(`http://`)
            .map(res => res.json().items || []);
    }
}