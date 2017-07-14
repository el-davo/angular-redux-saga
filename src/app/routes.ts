import {ReleaseTogglesComponent} from './release-toggles/release-toggles.component';

export const routes = [
  {
    path: '',
    redirectTo: '/release-toggles',
    pathMatch: 'full'
  }, {
    path: 'release-toggles',
    component: ReleaseTogglesComponent
  }
];
