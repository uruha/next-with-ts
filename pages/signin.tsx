import * as React from 'react';
import { FormEvent } from 'react';
import useEmail from '~/hooks/signin/useEmail';
import usePassword from '~/hooks/signin/usePassword';
import Router from 'next/router';
import http from '~/lib/http';

import { useDispatch } from 'react-redux';
import { accountActions } from '~/actions';

import { SigninRequest } from '~/modelTypes';

const Signin: React.FC = () => {
    const email = useEmail('');
    const password = usePassword('');
    const dispatch = useDispatch();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const signinRequest: SigninRequest = {
            email: email.entertedValue,
            password: password.entertedValue
        };

        try {
            const res = await http.post('/api/signin', {
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
                password.setInputValue('');
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
                    value={password.entertedValue}
                    onChange={password.changedValue}
                    type="password"
                />
            </div>
            <button type="submit">Signin</button>
        </form>
    );
};

export default Signin;
