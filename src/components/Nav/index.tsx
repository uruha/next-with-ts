import * as React from 'react';
import Link from 'next/link';

import Signout from '~/components/Signout';
import { AccountState } from '~/stateTypes';

interface NavProps {
    account: AccountState;
    hasAccountData: boolean;
}

const Nav: React.FC<NavProps> = ({ account, hasAccountData }) => (
    <nav>
        <ul className="Nav-list">
            <li>Header</li>
            <li>
                <Link href="/todo">
                    <a>TODO</a>
                </Link>
            </li>
            <li>link 2</li>
            {!hasAccountData && (
                <li>
                    <Link href="/signin">
                        <a>signin</a>
                    </Link>
                </li>
            )}
            {hasAccountData && (
                <li>
                    <Signout />
                </li>
            )}
        </ul>
        {hasAccountData && (
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

export default Nav;
