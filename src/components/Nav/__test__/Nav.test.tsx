/* eslint-env jest */
import * as React from 'react';
import { shallow } from 'enzyme';

import Nav from '~/components/Nav';

describe('Navigation', () => {
    it('renders navigation list itmes collection', () => {
        const wrapper = shallow(<Nav />);
        expect(wrapper.find('.Nav-list').find('li')).toHaveLength(4);
    });
});
