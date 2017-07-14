import {ReleaseTogglesComponent} from './release-toggles/release-toggles.component';
import {ReleaseToggleComponent} from './release-toggle/release-toggle.component';

export const routes = [
  {
    path: '',
    redirectTo: '/release-toggles',
    pathMatch: 'full'
  }, {
    path: 'release-toggles',
    component: ReleaseTogglesComponent
  },
  {
    path: 'release-toggles/:id',
    component: ReleaseToggleComponent
  }
];
