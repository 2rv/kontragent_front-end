import React from 'react';

import { AuthVerificationEmailComponent } from './auth-verification-email.component';

import { useDispatch, useSelector } from 'react-redux';

import { authVerificationEmailFormValidation } from './auth-verification-email.validation';

import {
  AUTH_VERIFICATION_EMAIL_DATA_NAME,
  AUTH_VERIFICATION_EMAIL_STORE_NAME,
} from './auth-verification-email.constant';

import {
  verificationEmailFormFetchData,
  verificationEmailFormGetCode,
  cleanupStore,
} from './auth-verification-email.action';

import { convertAuthVerificationEmailFormData } from './auth-verification-email.convert';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { AUTH_STORE_NAME } from '../../lib/common/auth'
import { authUpdateUserData } from '../../lib/common/auth/auth.action';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { redirect } from '../../main/navigation/navigation.core';

export function AuthVerificationEmailContainer() {
  const { state, pageLoading, confirmEmail } = useSelector((state) => ({
    state: state[AUTH_VERIFICATION_EMAIL_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    confirmEmail: state[AUTH_STORE_NAME].user.confirmEmail
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    authUpdateUserData()(dispatch)
    dispatch(verificationEmailFormGetCode());

    return function cleanup() {
      dispatch(cleanupStore());
    };
  }, []);

  React.useEffect(() => {
    if (confirmEmail) {
      redirect('/')
    }
  }, [confirmEmail])

  const verificationEmailFormSendData = (values) => {
    const data = convertAuthVerificationEmailFormData(values);
    dispatch(
      verificationEmailFormFetchData(
        data,
        data[AUTH_VERIFICATION_EMAIL_DATA_NAME.CODE],
      ),
    );
  };

  const getInitialValue = () => {
    return {
      [AUTH_VERIFICATION_EMAIL_DATA_NAME.CODE]: '',
    };
  };

  return (
    <AuthVerificationEmailComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      initialValue={getInitialValue()}
      validation={authVerificationEmailFormValidation}
      onSubmitForm={verificationEmailFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.form)}
    />
  );
}
