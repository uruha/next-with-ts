/* eslint-env jest */
import * as React from 'react';
import {
    cleanup,
    fireEvent,
    getAllByText,
    getByPlaceholderText,
    render
} from '@testing-library/react';

import Todo from '~pages/todo';

describe('todo', () => {
    afterEach(cleanup);

    it('can remove a task', () => {
        let lists;
        const { container } = render(<Todo />);
        lists = container.querySelectorAll('.Todo-list li');
        expect(lists).toHaveLength(0);

        fireEvent.change(
            getByPlaceholderText(container, 'タスクを追加しよう!!'),
            { target: { value: 'タスク1' } }
        );
        fireEvent.click(getAllByText(container, 'タスクを追加')[0]);
        lists = container.querySelectorAll('.Todo-list li');
        expect(lists).toHaveLength(1);

        fireEvent.click(getAllByText(container, '編集')[0]);
        fireEvent.click(getAllByText(container, '削除')[0]);
        lists = container.querySelectorAll('.Todo-list li');
        expect(lists).toHaveLength(0);
    });
});
