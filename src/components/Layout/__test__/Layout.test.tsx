/* eslint-env jest */
import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import Layout from '~/components/Layout';
import { createStore } from 'redux';
import { rootReducer } from '~/reducers';
import { Provider } from 'react-redux';

const renderWithProvider = (
    testComponent: React.ReactElement,
    store = createStore(rootReducer, {})
) => {
    return render(<Provider store={store}>{testComponent}</Provider>);
};

describe('Layout', () => {
    afterEach(cleanup);

    it('render navigation component', () => {
        const { container } = renderWithProvider(<Layout />);
        const navComponent = container.getElementsByTagName('nav');
        expect(navComponent.length > 0).toStrictEqual(true);
    });

    it('render children component', () => {
        const { container } = renderWithProvider(
            <Layout>
                <div className="test" />
            </Layout>
        );
        const childComponent = container.getElementsByClassName('test');
        expect(childComponent.length > 0).toStrictEqual(true);
    });
});
