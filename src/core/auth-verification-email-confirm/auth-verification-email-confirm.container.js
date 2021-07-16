import React, { useEffect } from 'react';

import { AuthVerificationEmailConfirmComponent } from './auth-verification-email-confirm.component';

import { useDispatch, useSelector } from 'react-redux';

import { authVerificationEmailConfirmUploadData } from './auth-verification-email-confirm.action';

import { AUTH_VERIFICATION_EMAIL_CONFIRM_STORE_NAME } from './auth-verification-email-confirm.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { AUTH_STORE_NAME } from '../../lib/common/auth';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
} from '../../main/store/store.service';

import { getQuery } from '../../main/navigation';
import { CODE_QUERY_NAME } from '../../lib/common/code-verification';

export function AuthVerificationEmailConfirmContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, token } = useSelector((state) => ({
    state: state[AUTH_VERIFICATION_EMAIL_CONFIRM_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    token: state[AUTH_STORE_NAME].token,
  }));

  useEffect(() => {
    authVerificationEmailConfirmSendData();
  }, []);

  const authVerificationEmailConfirmSendData = () => {
    const verificationCode = getQuery(CODE_QUERY_NAME);
    dispatch(authVerificationEmailConfirmUploadData(verificationCode, token));
  };

  return (
    <AuthVerificationEmailConfirmComponent
      isPending={isRequestPending(state.authVerificationEmailConfirm)}
      isError={isRequestError(state.authVerificationEmailConfirm)}
      errorMessage={getRequestErrorMessage(state.authVerificationEmailConfirm)}
      pageLoading={pageLoading}
    />
  );
}
