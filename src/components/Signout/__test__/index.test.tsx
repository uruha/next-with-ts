/* eslint-env jest */
import * as React from 'react';
import { cleanup, fireEvent, getByText, render } from '@testing-library/react';
import http from '~/lib/http';
import Signout from '~/components/Signout';

jest.mock('~/lib/http', () => ({
    post: jest.fn(() => ({ status: 204 }))
}));

describe('Signout', () => {
    afterEach(cleanup);

    it('can sign out with the button', async () => {
        const { container } = render(<Signout />);

        const button = container.querySelectorAll('button[type="button"]');
        expect(button).not.toBeNull();

        button && fireEvent.click(getByText(container, 'signout'));
        expect(http.post).toHaveBeenCalledWith('/api/signout');
    });
});
