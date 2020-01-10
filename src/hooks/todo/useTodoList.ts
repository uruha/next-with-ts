import { useState } from 'react';
import { Task } from '~/components/TodoLists';

const userTodoList = (initialState: Task[] = []) => {
    const [tasks, setTasks] = useState(initialState);

    const handleAddTask = (text?: string) => {
        if (!text) return;

        const task: Task = { text, checked: false };
        setTasks([...tasks, task]);
    };

    const handleEditTask = (index: number, task: Task) => {
        const t = tasks;
        t[index] = task;
        setTasks([...t]);
    };

    const handleRemoveTask = (index: number) => {
        const t = tasks;
        t.splice(index, 1);
        setTasks([...t]);
    };

    return { tasks, handleAddTask, handleEditTask, handleRemoveTask };
};

export default userTodoList;
