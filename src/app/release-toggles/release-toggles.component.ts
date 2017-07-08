import {Component, OnInit} from '@angular/core';
import {ReleaseToggleState, ReleaseToggle} from './release-toggles.state';
import {ReleaseTogglesActions} from './release-toggles.actions';
import {select, dispatch} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-release-toggles',
  templateUrl: './release-toggles.component.html'
})
export class ReleaseTogglesComponent implements OnInit {

  @select() releaseToggles: Observable<ReleaseToggleState>;

  constructor(private releaseTogglesActions: ReleaseTogglesActions) {
  }

  @dispatch()
  ngOnInit() {
    return this.releaseTogglesActions.fetchReleaseToggles();
  }

  @dispatch()
  showEditToggleModal(releaseToggle: ReleaseToggle) {
    return this.releaseTogglesActions.showEditToggleModal(releaseToggle);
  }

}
