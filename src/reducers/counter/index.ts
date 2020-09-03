import { INCREMENT, DECREMENT, UPDATE_COUNT } from '~/constant';
import { CounterActionTypes } from '~/actionTypes';
import { CountState } from '~/stateTypes';

import { HYDRATE } from 'next-redux-wrapper';

export const initialCounter: CountState = { count: 0 };

export const counter = (
    state = initialCounter,
    action: CounterActionTypes
): CountState => {
    switch (action.type) {
        case HYDRATE:
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return { ...state, count: action.payload.counter.count };

        case UPDATE_COUNT:
            return { ...state, count: action.payload };

        default:
            return state;
    }
};
