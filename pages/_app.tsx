import * as React from 'react';
import { NextComponentType } from 'next';
import App, { AppProps } from 'next/app';

import { Dispatch } from 'redux';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import makeStore from '~/store';
import { StoreWithSaga } from '~/store';

import { increment } from '~/actions';
import { accountActions } from '~/actions/account';
import { getAccountState } from '~/sagas/selectors/account';

interface CustomProps {
    store: StoreWithSaga;
    isServer: boolean;
}

class CustomApp extends App<CustomProps & AppProps> {
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

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        await ctx.store.execSagaTask(ctx.isServer, (dispatch: Dispatch) => {
            dispatch(increment(1));
        });

        return { pageProps };
    }

    componentDidMount() {
        /**
         * @NOTE
         * this action is only client behavior.
         */
        const { store } = this.props;
        const { pathname } = this.props.router;

        if (pathname !== '/signin') {
            const account = getAccountState(store.getState());
            if (!(account.data.email && account.data.nickname)) {
                store.dispatch(accountActions.getAccount());
            }
        }
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

/**
 * @NOTE
 * makeStore type is `(initialState: RootState) => Store<RootState, AnyAction>`.
 * But withRedux accepted argument type is only ReturnType<typeof makeStore>.
 * I temporarily respond with Redux TInitialState type is <any>.
 */
export default withRedux(makeStore)(CustomApp);
