import App from 'next/app';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { ThemeProvider } from '@mui/material/styles';

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
import { authRedirectVerification } from '../../lib/common/auth/auth.redirect'

import CssBaseline from '@material-ui/core/CssBaseline';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../../core/auth-verification-email'
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../../core/auth-verification-phone'
import { AUTH_SIGNUP_ROUTE_PATH } from '../../core/auth-signup/auth-signup.constant'

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

    const token = authGetCookieToken(ctx);

    setAutorization(token);

    await ctx.store.dispatch(authSetData(token));

    await Router({ ...ctx, token });

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps({ ...ctx, token })
      : { token };

    if (token) {
      if (ctx.pathname !== AUTH_VERIFICATION_EMAIL_ROUTE_PATH && ctx.pathname !== AUTH_VERIFICATION_PHONE_ROUTE_PATH && ctx.pathname !== AUTH_SIGNUP_ROUTE_PATH) {
        authRedirectVerification(ctx, AUTH_VERIFICATION_EMAIL_ROUTE_PATH, AUTH_VERIFICATION_PHONE_ROUTE_PATH)
      }
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <ReduxProvider store={store}>
        <NavigationObserver />
        <CssBaseline />
        <ThemeProvider theme={this.state.theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    );
  }
}

export const AppCore = withRedux(initStore, { debug: true })(MyApp);
