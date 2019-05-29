import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware, { Task, END } from 'redux-saga';
import { createLogger } from 'redux-logger';
import { rootReducer, RootState } from '~/reducers';
import rootSaga from '~/sagas';

export interface SagaTask extends Task {
    done?: any;
}

export interface StoreWithSaga extends Store<RootState> {
    sagaTask: SagaTask | null;
    runSagaTask: () => void;
    stopSaga: () => Promise<any>;
    execSagaTask: (isServer: boolean, tasks: any) => Promise<any>;
}

export default (initialState: RootState) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares: any = [sagaMiddleware];

    const logger = createLogger();
    middlewares.push(logger);

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    ) as StoreWithSaga;

    store.runSagaTask = () => {
        if (store.sagaTask) return;
        store.sagaTask = sagaMiddleware.run(rootSaga);
    };

    store.stopSaga = async () => {
        if (!store.sagaTask) return;
        store.dispatch(END);
        await store.sagaTask.done;
        store.sagaTask = null;
    };

    store.execSagaTask = async (isServer, tasks) => {
        store.runSagaTask();
        tasks(store.dispatch);
        await store.stopSaga();

        if (!isServer) store.runSagaTask();
    };

    store.runSagaTask();

    return store;
};
