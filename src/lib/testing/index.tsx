import * as React from 'react';
import { render } from '@testing-library/react';

import { createStore } from 'redux';
import { rootReducer } from '~/reducers';
import { Provider } from 'react-redux';

export const renderWithProvider = (
    testComponent: React.ReactElement,
    initialState = {}
) => {
    return render(
        <Provider store={createStore(rootReducer, initialState)}>
            {testComponent}
        </Provider>
    );
};

import { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

export const withMockedRouter = (
    router: Partial<NextRouter> = {},
    children: React.ReactElement
): React.ReactElement => {
    const mockedRouter = {
        route: '',
        pathname: '',
        query: {},
        asPath: '',
        basePath: '',
        push: async () => true,
        replace: async () => true,
        reload: () => null,
        back: () => null,
        prefetch: async () => undefined,
        beforePopState: () => null,
        isSsr: true,
        isFallback: true,
        events: {
            on: () => null,
            off: () => null,
            emit: () => null
        },
        ...router
    };

    return (
        <RouterContext.Provider value={mockedRouter}>
            {children}
        </RouterContext.Provider>
    );
};
