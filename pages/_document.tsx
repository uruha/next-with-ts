import * as React from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
} from 'next/document';

import crypto from 'crypto';

const cspHashOf = (text: string) => {
    const hash = crypto.createHash('sha256');
    hash.update(text);
    return `'sha256-${hash.digest('base64')}'`;
};

class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        let csp = `default-src 'self'; script-src 'self' ${cspHashOf(
            NextScript.getInlineScriptSource(this.props)
        )}`;
        if (process.env.NODE_ENV !== 'production') {
            csp = `style-src 'self' 'unsafe-inline'; font-src 'self' data:; default-src 'self'; script-src 'unsafe-eval' 'self' ${cspHashOf(
                NextScript.getInlineScriptSource(this.props)
            )}`;
        }

        return (
            <Html>
                <Head>
                    <style>{`
                        body { margin: 0 }
                        h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }
                        ul { margin: 0; padding: 0; list-style: none; }
                    `}</style>
                    <meta httpEquiv="Content-Security-Policy" content={csp} />
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
