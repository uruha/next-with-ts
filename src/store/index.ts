import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware, { Task, END } from 'redux-saga';
import { createLogger } from 'redux-logger';
import { rootReducer, RootState } from '~/reducers';
import rootSaga from '~/sagas';

export interface StoreWithSaga extends Store<RootState> {
    sagaTask: Task | null;
    runSagaTask: () => void;
    stopSaga: () => Promise<void>;
    execSagaTask: (isServer: boolean, tasks: any) => Promise<void>;
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
        console.log('saga is runing');
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
            console.log('stop saga');
        }

        // if (!isServer) {
        //     console.log('restart saga');
        //     store.runSagaTask();
        // };
    };

    store.runSagaTask();

    return store;
};
