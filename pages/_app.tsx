import * as React from 'react';
import { NextComponentType, NextContext } from 'next';
import App, { Container } from 'next/app';

import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import store from '~/store';
import { Store } from 'redux';

class CustomApp extends App<{ store: Store }> {
    static async getInitialProps({
        Component,
        ctx
    }: {
        Component: NextComponentType;
        ctx: NextContext;
    }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(store)(CustomApp);
