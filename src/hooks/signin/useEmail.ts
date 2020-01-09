import { useState, ChangeEvent } from 'react';
import { Email } from '~/modelTypes';

const useEmail = (initialValue: Email = '') => {
    const [entertedValue, setInputValue] = useState<Email>(initialValue);
    const changedValue = (e: ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value);
    return { entertedValue, setInputValue, changedValue };
};

export default useEmail;
