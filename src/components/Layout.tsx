import * as React from 'react';
import Head from 'next/head';

interface LayoutProps {
    title?: string;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    title = 'Default title'
}) => (
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
            <nav>
                <ul className="Nav-list">
                    <li>Header</li>
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                </ul>
            </nav>
        </header>
        <main>{children}</main>
        <footer>
            <small>
                Copyright &copy; since 1987 Kotaro Chiba I`m from Yokohama.
            </small>
        </footer>
        <style jsx>{`
            .Nav-list {
                display: flex;
                padding: 12px 6px;
            }
            .Nav-list li {
                padding: 0 6px;
            }
        `}</style>
    </>
);

export default Layout;
