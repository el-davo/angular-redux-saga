import {Component, OnInit} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {ReleaseToggleState} from './release-toggle.state';
import {ReleaseToggleActions} from './release-toggle.actions';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-release-toggle',
  templateUrl: './release-toggle.component.html',
  styleUrls: ['./release-toggle.component.css']
})
export class ReleaseToggleComponent implements OnInit {

  @select('releaseToggle') releaseToggle$: Observable<ReleaseToggleState>;

  constructor(private releaseToggleActions: ReleaseToggleActions, private route: ActivatedRoute) {
  }

  @dispatch()
  ngOnInit() {
    return this.releaseToggleActions.fetchReleaseToggle(this.route.snapshot.params.id);
  }
}
