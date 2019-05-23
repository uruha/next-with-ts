import { combineReducers } from 'redux';

import { INCREMENT, DECREMENT } from '~/constant';
import { CounterActionTypes } from '~/actionTypes';
import { CountState } from '~/stateTypes';

export const initialState: CountState = { count: 0 };

export const counter = (
    state = initialState,
    action: CounterActionTypes
): CountState => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                count: state.count + action.payload
            });
        case DECREMENT:
            return Object.assign({}, state, {
                count: state.count - action.payload
            });
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    counter
});

export type RootState = ReturnType<typeof rootReducer>;
