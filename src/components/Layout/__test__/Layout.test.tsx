/* eslint-env jest */
import * as React from 'react';
import { shallow } from 'enzyme';

import Layout from '../index';
import Nav from '../../Nav';

describe('Layout', () => {
    it('render title', () => {
        const title = 'Test';

        const wrapper = shallow(<Layout title={title} />);
        expect(
            wrapper
                .find('Head')
                .find('title')
                .text()
        ).toStrictEqual(title);
    });

    it('render navigation', () => {
        const wrapper = shallow(<Layout />);
        expect(wrapper.find('header').contains(<Nav />)).toStrictEqual(true);
    });

    it('render children', () => {
        const wrapper = shallow(
            <Layout>
                <div className="test" />
            </Layout>
        );

        expect(
            wrapper.find('main').contains(<div className="test" />)
        ).toStrictEqual(true);
    });
});
