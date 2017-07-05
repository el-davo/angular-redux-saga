import {Component, OnInit} from '@angular/core';
import {ReleaseToggleState, ReleaseToggle} from './release-toggles.state';
import {ReleaseTogglesActions} from './release-toggles.actions';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-release-toggles',
  templateUrl: './release-toggles.component.html',
  providers: [
    ReleaseTogglesActions
  ]
})
export class ReleaseTogglesComponent implements OnInit {

  @select() readonly releaseToggles: Observable<ReleaseToggleState>;

  constructor(private ngRedux: NgRedux<ReleaseToggleState>, private releaseTogglesActions: ReleaseTogglesActions) {
  }

  ngOnInit() {
    this.ngRedux.dispatch(this.releaseTogglesActions.fetchReleaseToggles());
  }

  showEditToggleModal(releaseToggle: ReleaseToggle) {
    this.ngRedux.dispatch(this.releaseTogglesActions.showEditToggleModal(releaseToggle));
  }

}
