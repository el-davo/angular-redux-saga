import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ReleaseToggle } from '../release-toggles.state';

@Injectable()
export class ReleaseTogglesService {

    constructor(private http: Http) { }

    fetchReleaseToggles(): Observable<ReleaseToggle[]> {
         this.http.get(`/titan-user-data/currentUser`)
            .map(res => {
                console.log('======================================');
                console.log(res.json().data);
                console.log('======================================');
            });

        return this.http.get(`/titan-raw-data-management/releaseToggles`)
            .map(res => res.json().data || []);
    }
}
