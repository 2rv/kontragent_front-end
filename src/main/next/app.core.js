import App from 'next/app';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';

import { initStore } from '../store';
import { setAutorization } from '../auth';
import { Router } from '../router';

import { Theme } from '../theme';
import { THEME_CONFIG } from '../../lib/theme';

import {
  langServerDetection,
  langBrowserDetection,
} from '../../lib/common/lang';
import { authSetData, authGetCookieToken } from '../../lib/common/auth';

import { NavigationObserver } from '../../lib/common/navigation';

import { setCurrentAuthCookie } from '../auth';

import CssBaseline from '@material-ui/core/CssBaseline';

class MyApp extends App {
  componentDidMount() {
    langBrowserDetection();
    setCurrentAuthCookie();
  }

  constructor(props) {
    super(props);
    this.state = {
      theme: Theme(THEME_CONFIG),
    };
  }

  static async getInitialProps({ Component, ctx }) {
    langServerDetection(ctx);

    if (ctx.res?.statusCode === 404) {
      ctx.res.writeHead(301, { Location: '/' });
      ctx.res.end();
    }

    const token = authGetCookieToken(ctx);

    setAutorization(token);

    await ctx.store.dispatch(authSetData(token));

    await Router({ ...ctx, token });

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps({ ...ctx, token })
      : { token };

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ReduxProvider store={store}>
          <NavigationObserver />
          <CssBaseline />
          <ThemeProvider theme={this.state.theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ReduxProvider>
      </>
    );
  }
}

export const AppCore = withRedux(initStore, { debug: true })(MyApp);
