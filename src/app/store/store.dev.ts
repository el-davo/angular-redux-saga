//import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import {storeLogger} from "ngrx-store-logger";

export const store = [storeLogger(), combineReducers];
