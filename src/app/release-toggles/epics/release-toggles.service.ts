import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ReleaseToggle} from '../release-toggles.state';

@Injectable()
export class ReleaseTogglesService {

  constructor(private http: Http) {
  }

  fetchReleaseToggles(): Observable<ReleaseToggle[]> {
    return this.http.get(`http://localhost:3001/titan-raw-data-management/releaseToggles`)
      .map(res => res.json() || []);
  }

  fetchReleaseToggle(id: string): Observable<ReleaseToggle> {
    return this.http.get(`http://localhost:3001/titan-raw-data-management/releaseToggles/${id}`)
      .map(res => res.json());
  }
}
