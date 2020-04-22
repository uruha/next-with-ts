/* eslint-env jest */
import * as React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { rootReducer } from '~/reducers';

import Nav from '~/components/Nav';
import { createStore } from 'redux';

describe('Navigation', () => {
    it('renders navigation list items collection', () => {
        const account = {
            data: {
                email: 'test@example.com',
                nickname: 'Geronimo'
            }
        };
        const store = createStore(rootReducer, { account });
        const { container } = render(
            <Provider store={store}>
                <Nav />
            </Provider>
        );
        const lists = container.querySelectorAll('.Nav-list li');
        expect(lists).toHaveLength(4);
    });
});
