import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ReleaseToggle } from '../release-toggles.state';

@Injectable()
export class ReleaseTogglesService {

    constructor(private http: Http) { }

    fetchTodos(queryTitle: string): Observable<ReleaseToggle[]> {
        return this.http.get(`http://`)
            .map(res => res.json().items || []);
    }
}
