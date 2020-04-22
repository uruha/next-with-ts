import { INCREMENT, DECREMENT, UPDATE_COUNT } from '~/constant';
import { CounterActionTypes } from '~/actionTypes';

export const increment = (number: number): CounterActionTypes => ({
    type: INCREMENT,
    payload: number
});

export const decrement = (number: number): CounterActionTypes => ({
    type: DECREMENT,
    payload: number
});

export const updateCount = (number: number): CounterActionTypes => ({
    type: UPDATE_COUNT,
    payload: number
});
