import {releaseTogglesReducer as releaseToggles} from './release-toggles/release-toggles.reducer';
import {composeReducers, defaultFormReducer} from '@angular-redux/form';
import {combineReducers} from 'redux';

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    releaseToggles
  })
);
