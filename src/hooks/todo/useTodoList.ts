import { useState } from 'react';
import { Task } from '~/components/TodoLists';

export const useTodoList = (initialState: Task[] = []) => {
    const [list, setList] = useState(initialState);

    const add = (text?: string) => {
        if (!text) return;

        const task: Task = { text, checked: false };
        setList([...list, task]);
    };

    const edit = (index: number, task: Task) => {
        const t = list;
        t[index] = task;
        setList([...t]);
    };

    const remove = (index: number) => {
        const t = list;
        t.splice(index, 1);
        setList([...t]);
    };

    return { list, add, edit, remove };
};
