import * as React from 'react';
import { DefaultErrorIProps } from 'next/error';
import { NextContext } from 'next';

/**
 * @NOTE
 * `@types/next/error`'s getInitialProps type is different from `@types/next/app`.
 * I suggest that
 * getInitialProps is not `static getInitialProps: GetInitialProps<DefaultErrorIProps, NextContext>`,
 * `static getInitialProps(context: DefaultErrorIProps & NextContext): Promise<DefaultErrorIProps & NextContext>` is correct ?
 */
class CustomError extends React.Component<DefaultErrorIProps & NextContext> {
    static async getInitialProps({
        res,
        err
    }: DefaultErrorIProps & NextContext) {
        const statusCode = res ? res.statusCode : err ? err.stack : null;

        return { statusCode };
    }

    render() {
        const { statusCode } = this.props;
        return (
            <div>
                <p>
                    {statusCode
                        ? `An error ${statusCode} occurred on server`
                        : 'An error occurred on client'}
                </p>
            </div>
        );
    }
}

export default CustomError;
