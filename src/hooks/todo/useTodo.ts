import { ChangeEvent, useState } from 'react';

export const useTodo = (initialState = '') => {
    const [value, setValue] = useState(initialState);

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue('');
    };

    return { value, change, reset };
};
