import { Reducer } from 'redux';
import { UPDATE_COUNT } from '~/constant';
import { CounterActionTypes } from '~/actionTypes';
import { CountState } from '~/stateTypes';

import { HYDRATE } from 'next-redux-wrapper';

export const initialCounter: CountState = { count: 0 };

export const counter: Reducer<CountState, CounterActionTypes> = (
    state = initialCounter,
    action
) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, count: action.payload.counter.count };

        case UPDATE_COUNT:
            return { ...state, count: action.payload };

        default:
            return state;
    }
};
