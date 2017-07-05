import {releaseTogglesReducer as releaseToggles} from './release-toggles/release-toggles.reducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({releaseToggles});
