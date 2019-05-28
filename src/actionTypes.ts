import { INCREMENT, DECREMENT, UPDATE_COUNT } from '~/constant';

interface IncrementAction {
    type: typeof INCREMENT;
    payload: number;
}

interface DecrementAction {
    type: typeof DECREMENT;
    payload: number;
}

interface UpdateCountAction {
    type: typeof UPDATE_COUNT;
    payload: number;
}

export type CounterActionTypes =
    | IncrementAction
    | DecrementAction
    | UpdateCountAction;
