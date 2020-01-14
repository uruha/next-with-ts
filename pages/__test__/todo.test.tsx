/* eslint-env jest */
import * as React from 'react';
import {
    cleanup,
    fireEvent,
    getAllByText,
    render
} from '@testing-library/react';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Todo from '~pages/todo';

describe('todo', () => {
    afterEach(cleanup);

    it('can remove a task', () => {
        let lists;
        const { container } = render(<Todo />);
        lists = container.querySelectorAll('.Todo-list li');
        expect(lists).toHaveLength(4);

        fireEvent.click(getAllByText(container, '削除')[0]);
        lists = container.querySelectorAll('.Todo-list li');
        expect(lists).toHaveLength(3);
    });
});
