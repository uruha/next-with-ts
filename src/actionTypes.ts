import { INCREMENT, DECREMENT } from './constant';

interface IncrementAction {
    type: typeof INCREMENT;
    payload: number;
}

interface DecrementAction {
    type: typeof DECREMENT;
    payload: number;
}

export type CounterActionTypes = IncrementAction | DecrementAction;
