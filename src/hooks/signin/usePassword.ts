import { useState, ChangeEvent } from 'react';
import { Password } from '~/modelTypes';

const usePassword = (initialValue: Password = '') => {
    const [entertedValue, setInputValue] = useState<Password>(initialValue);
    const changedValue = (e: ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value);
    return { entertedValue, setInputValue, changedValue };
};

export default usePassword;
