/* eslint-env jest */
import * as React from 'react';
import Nav from '~/components/Nav';

import { renderWithProvider } from '~/lib/testing';

describe('Navigation', () => {
    it('renders navigation list items collection', () => {
        const account = {
            data: {
                email: 'test@example.com',
                nickname: 'Geronimo'
            }
        };

        const { container } = renderWithProvider(<Nav />, account);
        const lists = container.querySelectorAll('.Nav-list li');
        expect(lists).toHaveLength(4);
    });
});
