import React, { useEffect } from 'react';

import { AuthVerificationEmailComponent } from './auth-verification-email.component';

import { useDispatch, useSelector } from 'react-redux';

import { authFormVerificationEmailSendCode } from './auth-verification-email.action';

import { AUTH_VERIFICATION_EMAIL_STORE_NAME } from './auth-verification-email.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { AUTH_STORE_NAME } from '../../lib/common/auth';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function AuthVerificationEmailContainer() {
  const dispatch = useDispatch();

  const { state, pageLoading, token } = useSelector((state) => ({
    state: state[AUTH_VERIFICATION_EMAIL_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    token: state[AUTH_STORE_NAME].token,
  }));
  const authVerificationEmailSendCode = () => {
    dispatch(authFormVerificationEmailSendCode(token));
  };

  useEffect(authVerificationEmailSendCode, []);

  return (
    <AuthVerificationEmailComponent
      isPending={isRequestPending(state.authFormVerificationEmail)}
      isError={isRequestError(state.authFormVerificationEmail)}
      pageLoading={pageLoading}
      userEmail={state.authFormVerificationEmail?.data?.email}
      errorMessage={getRequestErrorMessage(state.authFormVerificationEmail)}
      sendCode={authVerificationEmailSendCode}
    />
  );
}
