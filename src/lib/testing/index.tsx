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
