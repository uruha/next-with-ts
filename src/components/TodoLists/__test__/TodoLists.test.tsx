/* eslint-env jest */
import * as React from 'react';
import { render } from '@testing-library/react';

import TodoLists, { Task, TodoListsProps } from '~/components/TodoLists';

describe('TodoLists', () => {
    let props: TodoListsProps;

    // Initialize
    beforeEach(() => {
        const tasks: Task[] = [
            {
                text: 'Todo1',
                checked: true
            },
            {
                text: 'Todo2',
                checked: true
            }
        ];
        props = {
            editTask: jest.fn(),
            removeTask: jest.fn(),
            tasks,
            isEditable: false
        };
    });

    it('rendering todo list items', () => {
        const { container } = render(<TodoLists {...props} />);

        const lists = container.querySelectorAll('.Todo-list li');
        expect(lists).toHaveLength(2);
    });

    it('delete button is not exsisted when isEditable is false', () => {
        const { container } = render(<TodoLists {...props} />);

        const buttons = container.querySelectorAll('.Button');
        expect(buttons).toHaveLength(0);
    });
});
