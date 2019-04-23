import next from 'next';
import App, { Container } from 'next/app';

class CustomApp extends App {
    static async getInitialProps({
        Component,
        ctx
    }: {
        Component: next.NextComponentType;
        ctx: next.NextContext;
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
