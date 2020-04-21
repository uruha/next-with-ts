import { combineReducers } from 'redux';
import * as reducers from './reducers';

export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
