import * as React from 'react';
import { useState, ChangeEvent, FormEvent } from 'react';
import Router from 'next/router';

import fetch from 'isomorphic-unfetch';

import { SigninRequest, Email, Password } from '~/modelTypes';

const Signin: React.FC = () => {
    const [email, setEmail] = useState<Email>('');
    const [password, setPassword] = useState<Password>('');

    const hundleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const signinRequest: SigninRequest = { email, password };

        try {
            const res = await fetch('/api/signin', {
                method: 'POST',
                body: JSON.stringify(signinRequest)
            });

            if (res.status === 201) {
                Router.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={e => {
                hundleSubmit(e);
                setEmail('');
                setPassword('');
            }}
        >
            <h2>Signin</h2>
            <div>
                <label htmlFor="email">email</label>
                <input
                    id="email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setEmail(e.target.value);
                    }}
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
