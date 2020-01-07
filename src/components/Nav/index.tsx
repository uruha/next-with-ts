import * as React from 'react';
import Link from 'next/link';
// import Router from 'next/router';

import { useSelector } from 'react-redux';
import { RootState } from '~/reducers';
import { AccountState } from '~/stateTypes';

const Nav: React.FC = () => {
    const account = useSelector<RootState, AccountState>(
        state => state.account
    );

    const handleSignout = async () => {
        try {
            const res = await fetch('/api/signout', {
                method: 'POST'
            });

            if (res.status === 204) {
                window.location.href = '/';
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav>
            <ul className="Nav-list">
                <li>Header</li>
                <li>link 1</li>
                <li>link 2</li>
                {!(account.data.email && account.data.nickname) && (
                    <li>
                        <Link href="/signin">
                            <a>signin</a>
                        </Link>
                    </li>
                )}
                {account.data.email && account.data.nickname && (
                    <li>
                        <button type="button" onClick={() => handleSignout()}>
                            signout
                        </button>
                    </li>
                )}
            </ul>
            {account.data.email && account.data.nickname && (
                <ul>
                    <li>Mail: {account.data.email}</li>
                    <li>Name: {account.data.nickname}</li>
                </ul>
            )}
            <style jsx>{`
                .Nav-list {
                    display: flex;
                    padding: 12px 6px;
                }
                .Nav-list li {
                    padding: 0 6px;
                }
            `}</style>
        </nav>
    );
};

export default Nav;
