import { createStore, applyMiddleware, Store } from 'redux';
import { createLogger } from 'redux-logger';
import { rootReducer, RootState } from '~/reducers';

export default (initialState: RootState): Store<RootState> => {
    const middlewares = [];

    const logger = createLogger();
    middlewares.push(logger);

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );
};
