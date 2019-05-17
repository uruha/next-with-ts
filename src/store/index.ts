import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

export default () => {
    const middlewares = [];

    const logger = createLogger();
    middlewares.push(logger);

    const store = createStore(reducers, applyMiddleware(...middlewares));

    return store;
};
