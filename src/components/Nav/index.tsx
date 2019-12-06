import * as React from 'react';
import Link from 'next/link';

import { useSelector } from 'react-redux';
import { RootState } from '~/reducers';
import { AccountState } from '~/stateTypes';

const Nav: React.FC = () => {
    const account = useSelector<RootState, AccountState>(
        state => state.account
    );
    console.log(account);

    return (
        <nav>
            <ul className="Nav-list">
                <li>Header</li>
                <li>link 1</li>
                <li>link 2</li>
                <li>
                    <Link href="/signin">
                        <a>signin</a>
                    </Link>
                </li>
            </ul>
            {account.data.email && account.data.nickname && (
                <ul>
                    <li>Mail: {account.data.email}</li>
                    <li>Name: {account.data.nickname}</li>
                </ul>
            )}
            <div></div>
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
