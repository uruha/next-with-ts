import * as React from 'react';
import { useState, ChangeEvent, FormEvent } from 'react';
import useEmail from '~/hooks/signin/useEmail';
import Router from 'next/router';

import { useDispatch } from 'react-redux';
import { accountActions } from '~/actions/account';

import fetch from 'isomorphic-unfetch';

import { SigninRequest, Password } from '~/modelTypes';

const Signin: React.FC = () => {
    // const [email, setEmail] = useState<Email>('');
    const email = useEmail('');
    const [password, setPassword] = useState<Password>('');
    const dispatch = useDispatch();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const signinRequest: SigninRequest = {
            email: email.entertedValue,
            password
        };

        try {
            const res = await fetch('/api/signin', {
                method: 'POST',
                body: JSON.stringify(signinRequest)
            });

            if (res.status === 201) {
                dispatch(accountActions.getAccount());
                Router.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={e => {
                handleSubmit(e);
                email.setInputValue('');
                setPassword('');
            }}
        >
            <h2>Signin</h2>
            <div>
                <label htmlFor="email">email</label>
                <input
                    id="email"
                    value={email.entertedValue}
                    onChange={email.changedValue}
                    type="email"
                />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input
                    id="password"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value);
                    }}
                    type="password"
                />
            </div>
            <button type="submit">Signin</button>
        </form>
    );
};

export default Signin;
