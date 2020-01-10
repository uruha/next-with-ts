import { ChangeEvent, useState } from 'react';

export const useTodo = (initialState = '') => {
    const [todo, setTodo] = useState(initialState);

    const changeTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    };

    const resetTodo = () => {
        setTodo('');
    };

    return { todo, changeTodo, resetTodo };
};
