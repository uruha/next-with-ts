/* eslint-env jest */
import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import Layout from '~/components/Layout';

describe('Layout', () => {
    afterEach(cleanup);

    it('render navigation component', () => {
        const { container } = render(<Layout />);
        const navComponent = container.getElementsByTagName('nav');
        expect(navComponent.length > 0).toStrictEqual(true);
    });

    it('render children component', () => {
        const { container } = render(
            <Layout>
                <div className="test" />
            </Layout>
        );
        const childComponent = container.getElementsByClassName('test');
        expect(childComponent.length > 0).toStrictEqual(true);
    });
});
