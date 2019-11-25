/* eslint-env jest */
import * as React from 'react';
import { render } from '@testing-library/react';

import Nav from '~/components/Nav';

describe('Navigation', () => {
    it('renders navigation list itmes collection', () => {
        const { container } = render(<Nav />);
        const lists = container.querySelectorAll('.Nav-list li');
        expect(lists).toHaveLength(4);
    });
});
