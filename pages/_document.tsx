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
                    <style>{`
                        body { margin: 0 }
                        h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }
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
