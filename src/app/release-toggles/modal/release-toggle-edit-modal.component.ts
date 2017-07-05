import {Component} from '@angular/core';
import {ReleaseToggleState} from '../release-toggles.state';
import {ReleaseTogglesActions} from '../release-toggles.actions';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-release-toggle-edit-modal',
  templateUrl: './release-toggle-edit-modal.component.html'
})
export class ReleaseToggleEditModalComponent {

  @select() readonly releaseToggles: Observable<ReleaseToggleState>;

  constructor(private ngRedux: NgRedux<ReleaseToggleState>, private releaseTogglesActions: ReleaseTogglesActions) {
  }

  hideEditToggleModal() {
    this.ngRedux.dispatch(this.releaseTogglesActions.hideEditToggleModal());
  }

  updateToggleCategory(value: string) {
    this.ngRedux.dispatch(this.releaseTogglesActions.editToggleCategoryChange(value));
  }

  updateToggleName(value: string) {
    this.ngRedux.dispatch(this.releaseTogglesActions.editToggleNameChange(value));
  }

  updateToggleDescription(value: string) {
    this.ngRedux.dispatch(this.releaseTogglesActions.editToggleDescriptionChange(value));
  }

  updateToggleActive() {
    this.ngRedux.dispatch(this.releaseTogglesActions.editToggleActiveChange());
  }

  requestToggleEdit() {
    this.ngRedux.dispatch(this.releaseTogglesActions.requestToggleEdit());
    this.hideEditToggleModal();
  }
}
