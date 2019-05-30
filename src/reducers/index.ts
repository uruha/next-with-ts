import { combineReducers } from 'redux';

import { UPDATE_COUNT } from '~/constant';
import { CounterActionTypes } from '~/actionTypes';
import { CountState } from '~/stateTypes';

export const initialCounter: CountState = { count: 0 };

export const counter = (
    state = initialCounter,
    action: CounterActionTypes
): CountState => {
    switch (action.type) {
        case UPDATE_COUNT:
            return Object.assign({}, state, {
                count: action.payload
            });
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    counter
});

export type RootState = ReturnType<typeof rootReducer>;
