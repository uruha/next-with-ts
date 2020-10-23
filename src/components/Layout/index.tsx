import * as React from 'react';
import Head from 'next/head';

import Nav from '~/components/Nav';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/reducers';
import { AccountState } from '~/stateTypes';
import { accountActions } from '~/actions';

interface LayoutProps {
    title?: string;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    title = 'Default title'
}) => {
    const account = useSelector<RootState, AccountState>(
        state => state.account
    );
    const hasAccountData = Boolean(account.data.email && account.data.nickname);

    const { pathname } = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        /** User Agent detection */
        (async () => {
            fetch('/api/ua')
                .then(r => r.json())
                .then(ua => console.log(ua));
        })();

        if (pathname !== '/signin') {
            if (!hasAccountData) {
                dispatch(accountActions.getAccount());
            }
        }
    }, []);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>{title}</title>
            </Head>
            <header>
                <Nav account={account} hasAccountData={hasAccountData} />
            </header>
            <main>{children}</main>
            <footer>
                <small>
                    Copyright &copy; since 1987 Kotaro Chiba I`m from Yokohama.
                </small>
            </footer>
        </>
    );
};

export default Layout;
