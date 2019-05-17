import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

import { RootState } from '~/stateTypes';

export default (initialState: RootState = {}) => {
    const middlewares = [];

    const logger = createLogger();
    middlewares.push(logger);

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(...middlewares)
    );

    return store;
};
