/* eslint-env jest */
import * as React from 'react';
import { render } from '@testing-library/react';

import TodoLists, { Task } from '~/components/TodoLists';

describe('TodoLists', () => {
    it('rendering todo list items', () => {
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
        const props = {
            editTask: jest.fn(),
            removeTask: jest.fn(),
            tasks
        };
        const { container } = render(<TodoLists {...props} />);

        const lists = container.querySelectorAll('.Todo-list li');
        expect(lists).toHaveLength(2);
    });
});
