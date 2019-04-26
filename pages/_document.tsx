import * as React from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    NextDocumentContext
} from 'next/document';

class CustomDocument extends Document {
    static async getInitialProps(ctx: NextDocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <style>{`
                        body { margin: 0 }
                        h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }
                        ul { margin: 0; padding: 0; list-style: none; }
                    `}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
