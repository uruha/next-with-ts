import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import { createLogger } from 'redux-logger';
import { rootReducer, RootState } from '~/reducers';
import rootSaga from '~/sagas';

export interface StoreWithSaga extends Store<RootState> {
    sagaTask: Task;
    runSagaTask: () => void;
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
        store.sagaTask = sagaMiddleware.run(rootSaga);
    };
    store.runSagaTask();

    return store;
};
