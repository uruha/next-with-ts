import * as React from 'react';
import { NextComponentType, NextContext } from 'next';
import App, { Container } from 'next/app';

class CustomApp extends App {
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
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default CustomApp;
