import { INCREMENT, DECREMENT, UPDATE_COUNT } from '~/constant';
import { CounterActionTypes } from '~/actionTypes';
import { CountState } from '~/stateTypes';

export const initialCounter: CountState = { count: 0 };

export const counter = (
    state = initialCounter,
    action: CounterActionTypes
): CountState => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count++ };

        case DECREMENT:
            return { ...state, count: state.count-- };

        case UPDATE_COUNT:
            return { ...state, count: action.payload };

        default:
            return state;
    }
};
