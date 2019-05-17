import { INCREMENT, DECREMENT } from '../constant';
import { CounterActionTypes } from '../actionTypes';

const increment = (number: number): CounterActionTypes => ({
    type: INCREMENT,
    payload: number
});

const decrement = (number: number): CounterActionTypes => ({
    type: DECREMENT,
    payload: number
});

export const counterActions = { increment, decrement };
