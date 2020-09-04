/* eslint-env jest */
import * as React from 'react';
import Nav from '~/components/Nav';
import { render } from '@testing-library/react';

describe('Navigation', () => {
    it('renders navigation list items collection', () => {
        const account = {
            data: {
                email: 'test@example.com',
                nickname: 'Geronimo'
            }
        };
        const hasAccountData = true;
        const { container } = render(
            <Nav account={account} hasAccountData={hasAccountData} />
        );

        const lists = container.querySelectorAll('.Nav-list li');
        expect(lists).toHaveLength(4);
    });
});
