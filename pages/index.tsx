import * as React from 'react';
import Layout from '~/components/Layout';

import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '~/actions';
import { RootState } from '~/reducers';

import { CountState } from '~/stateTypes';

const Index: React.FC = () => {
    const counter = useSelector<RootState, CountState>(state => state.counter);
    const dispatch = useDispatch();

    return (
        <Layout title="Top page">
            <h1>Hello Next.js with Koa.js and Typescript</h1>
            <div>count: {counter && counter.count}</div>
            <div>
                <button onClick={() => dispatch(counterActions.increment(1))}>
                    count up
                </button>
                <button onClick={() => dispatch(counterActions.decrement(1))}>
                    count down
                </button>
            </div>
        </Layout>
    );
};

export default Index;
