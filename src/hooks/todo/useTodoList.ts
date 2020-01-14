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
        const l = [...list];
        l[index] = task;
        setList(l);
    };

    const remove = (index: number) => {
        const l = list.filter((_, i) => index !== i);
        setList(l);
    };

    return { list, add, edit, remove };
};
