import React from 'react';

import { AuthLoginComponent } from './auth-login.component';

import { useDispatch, useSelector } from 'react-redux';

import { authLoginFormValidation } from './auth-signup.validation';

import { AUTH_LOGIN_DATA_NAME } from './auth-login.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { httpRequest } from '../../main/http';

import { authSetData } from '../../lib/common/auth/auth.action';
import { redirect } from '../../main/navigation/navigation.core';

export function AuthLoginContainer() {
  const dispatch = useDispatch();
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const loginFormSendData = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      const res = await httpRequest({
        method: 'POST',
        url: '/auth/login',
        data,
      });

      dispatch(authSetData(res.data.accessToken));

      redirect('/').then(() => {
        setRequestPending(false);
        setRequestSuccess(true);
      });
    } catch (error) {
      if (error) {
        setRequestError(true);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const getInitialValue = () => {
    return {
      [AUTH_LOGIN_DATA_NAME.LOGIN]: '',
      [AUTH_LOGIN_DATA_NAME.PASSWORD]: '',
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <AuthLoginComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      validation={authLoginFormValidation}
      onSubmitForm={loginFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
