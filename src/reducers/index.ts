import { combineReducers } from 'redux';

import { INCREMENT, DECREMENT } from '../constant';
import { CounterActionTypes } from '../actionTypes';
import { CountState } from '../stateTypes';

const counter = (
    state = { count: 0 },
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

export default combineReducers({
    counter
});
