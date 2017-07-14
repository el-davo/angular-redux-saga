import {routerReducer as router} from '@angular-redux/router';
import {releaseTogglesReducer as releaseToggles} from './release-toggles/release-toggles.reducer';
import {releaseToggleReducer as releaseToggle} from './release-toggle/release-toggle.reducer';
import {composeReducers, defaultFormReducer} from '@angular-redux/form';
import {combineReducers} from 'redux';

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    router,
    releaseToggles,
    releaseToggle
  })
);
