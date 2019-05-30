import * as React from 'react';
import { NextComponentType } from 'next';
import App, { AppProps, Container, DefaultAppIProps } from 'next/app';

import { Dispatch } from 'redux';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import makeStore from '~/store';
import { StoreWithSaga } from '~/store';

import { increment } from '~/actions';

interface CustomProps {
    store: StoreWithSaga;
    isServer: boolean;
}

class CustomApp extends App<CustomProps & DefaultAppIProps & AppProps> {
    static async getInitialProps({
        Component,
        ctx
    }: {
        /**
         * @TODO
         * ctx's type `NextContent` is extended with { isServer, store }.
         * Extended type is noorrect.
         * Currently, there is no solution.
         * */
        Component: NextComponentType;
        ctx: any;
    }) {
        let pageProps = {};

        await ctx.store.execSagaTask(ctx.isServer, (dispatch: Dispatch) => {
            dispatch(increment(1));
        });

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
 * makeStore type is `(initialState: RootState) => Store<RootState, AnyAction>`.
 * But withRedux accepted argument type is only ReturnType<typeof makeStore>.
 * I temporarily respond with Redux TInitialState type is <any>.
 */
export default withRedux<any>(makeStore)(CustomApp);
