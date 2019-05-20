import * as React from 'react';
import Layout from '~/components/Layout';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { counterActions } from '~/actions';
import { RootState } from '~/reducers';

import { CountState } from '~/stateTypes';

interface IndexProps {
    counter: CountState;
    actions: typeof counterActions;
}

const Index: React.FC<IndexProps> = ({ counter, actions }) => (
    <Layout title="Top page">
        <h1>Hello Next.js with Koa.js and Typescript</h1>
        <div>count: {counter && counter.count}</div>
        <div>
            <button onClick={() => actions.increment(1)}>count up</button>
            <button onClick={() => actions.decrement(1)}>count down</button>
        </div>
    </Layout>
);

const mapStateToProps = (state: RootState) => ({
    counter: state.counter
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
