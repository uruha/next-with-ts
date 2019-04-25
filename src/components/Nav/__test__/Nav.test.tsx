/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import Nav from '../index';

describe('Navigation', () => {
    it('renders navigation list itmes collection', () => {
        const wrapper = shallow(<Nav />);
        expect(wrapper.find('.Nav-list').find('li')).toHaveLength(4);
    });
});
