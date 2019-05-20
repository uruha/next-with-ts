import * as React from 'react';
import { NextComponentType, NextContext } from 'next';
import App, { Container } from 'next/app';

import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import makeStore from '~/store';
import { Store } from 'redux';
import { RootState } from '~/reducers';

interface CustomProps {
    store: Store<RootState>;
}

class CustomApp extends App<CustomProps> {
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

/**
 * @NOTE
 * makeStore type is `(initialState: { counter: CountState }) => Store<{ counter: CountState }, AnyAction>`.
 * But withRedux accepted argument type is only ReturnType<typeof makeStore>.
 * I temporarily respond with Redux TInitialState type is <any>.
 */
export default withRedux<any>(makeStore)(CustomApp);
