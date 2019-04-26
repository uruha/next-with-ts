import * as React from 'react';
import Head from 'next/head';

import Nav from '~/components/Nav';

interface LayoutProps {
    title?: string;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    title = 'Default title'
}) => (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <header>
            <Nav />
        </header>
        <main>{children}</main>
        <footer>
            <small>
                Copyright &copy; since 1987 Kotaro Chiba I`m from Yokohama.
            </small>
        </footer>
    </>
);

export default Layout;
