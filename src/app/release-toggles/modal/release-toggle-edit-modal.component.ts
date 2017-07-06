import {Component} from '@angular/core';
import {ReleaseToggleState} from '../release-toggles.state';
import {ReleaseTogglesActions} from '../release-toggles.actions';
import {select, dispatch} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-release-toggle-edit-modal',
  templateUrl: './release-toggle-edit-modal.component.html'
})
export class ReleaseToggleEditModalComponent {

  @select() readonly releaseToggles: Observable<ReleaseToggleState>;

  constructor(private releaseTogglesActions: ReleaseTogglesActions) {
  }

  @dispatch()
  hideEditToggleModal() {
    return this.releaseTogglesActions.hideEditToggleModal();
  }

  @dispatch()
  updateToggleCategory(value: string) {
    return this.releaseTogglesActions.editToggleCategoryChange(value);
  }

  @dispatch()
  updateToggleName(value: string) {
    return this.releaseTogglesActions.editToggleNameChange(value);
  }

  @dispatch()
  updateToggleDescription(value: string) {
    return this.releaseTogglesActions.editToggleDescriptionChange(value);
  }

  @dispatch()
  updateToggleActive() {
    return this.releaseTogglesActions.editToggleActiveChange();
  }

  @dispatch()
  requestToggleEdit() {
    return this.releaseTogglesActions.requestToggleEdit();
  }
}
