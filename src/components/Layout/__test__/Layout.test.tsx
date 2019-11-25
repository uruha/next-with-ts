/* eslint-env jest */
import * as React from 'react';
// import { shallow } from 'enzyme';
import { render, cleanup } from '@testing-library/react';

import Layout from '~/components/Layout';
import Nav from '~/components/Nav';

describe('Layout', () => {
    afterEach(cleanup);

    it('render title', () => {
        const title = 'Test';

        const { container } = render(<Layout title={title} />);
        expect(container.title).toStrictEqual(title);
    });

    it('render navigation', () => {
        const { container } = render(<Layout />);
        const header = container.getElementsByTagName('header');
        // expect(wrapper.find('header').contains(<Nav />)).toStrictEqual(true);
    });

    it('render children', () => {
        const { container } = render(
            <Layout>
                <div className="test" />
            </Layout>
        );
        const main = container.getElementsByTagName('main');

        // expect(
        //     wrapper.find('main').contains(<div className="test" />)
        // ).toStrictEqual(true);
    });
});
