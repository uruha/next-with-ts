import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import createSagaMiddleware, { Task, END } from 'redux-saga';
import { MakeStore, Context, createWrapper } from 'next-redux-wrapper';
import { createLogger } from 'redux-logger';
import { rootReducer, RootState } from '~/reducers';
import rootSaga from '~/sagas';
import { Dispatch } from 'redux';

interface TasksCallbackType {
    (argv: Dispatch): void;
}
export interface StoreWithSaga extends Store<RootState> {
    sagaTask: Task | null;
    runSagaTask: () => void;
    stopSaga: () => Promise<void>;
    execSagaTask: (
        isServer: boolean,
        tasks: TasksCallbackType
    ) => Promise<void>;
}

const makeStore: MakeStore<RootState> = (ctx: Context) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares: Middleware[] = [sagaMiddleware];

    const logger = createLogger();
    middlewares.push(logger);

    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    ) as StoreWithSaga;

    store.runSagaTask = () => {
        if (store.sagaTask) return;
        store.sagaTask = sagaMiddleware.run(rootSaga);
    };

    store.stopSaga = async () => {
        if (!store.sagaTask) return;
        store.dispatch(END);
        await store.sagaTask.toPromise();
        store.sagaTask = null;
    };

    store.execSagaTask = async (isServer, tasks) => {
        tasks(store.dispatch);

        if (isServer) {
            store.stopSaga();
        }
    };

    store.runSagaTask();

    return store;
};

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });
