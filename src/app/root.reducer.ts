import {releaseTogglesReducer as releaseToggles} from './release-toggles/release-toggles.reducer';
import {ReleaseToggleState} from './release-toggles/release-toggles.state';
import {combineReducers} from 'redux';

export interface AppState {
  releaseToggles: ReleaseToggleState
}

export const rootReducer = combineReducers({releaseToggles});
