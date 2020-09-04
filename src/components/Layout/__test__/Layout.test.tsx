/* eslint-env jest */
import * as React from 'react';
import { cleanup } from '@testing-library/react';

import Layout from '~/components/Layout';

import { renderWithProvider, withMockedRouter } from '~/lib/testing';

describe('Layout', () => {
    afterEach(cleanup);

    it('render navigation component', () => {
        const { container } = renderWithProvider(
            withMockedRouter(
                {
                    pathname: '/'
                },
                <Layout />
            )
        );
        const navComponent = container.getElementsByTagName('nav');
        expect(navComponent.length > 0).toStrictEqual(true);
    });

    it('render children component', () => {
        const { container } = renderWithProvider(
            withMockedRouter(
                {
                    pathname: '/'
                },
                <Layout>
                    <div className="test" />
                </Layout>
            )
        );
        const childComponent = container.getElementsByClassName('test');
        expect(childComponent.length > 0).toStrictEqual(true);
    });
});
