import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Layout from '@/components/layout';
import theme from '@/components/theme';
import { UserContextProvider } from '@/context/UserContext';

export default function MyApp(props) {
    const { Component, pageProps } = props;

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <UserContextProvider>
            <React.Fragment>
                <Head>
                    <title>Mi aplicación</title>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width"
                    />
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Layout userInfo>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </React.Fragment>
        </UserContextProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
