import React, { useEffect } from 'react';

import { AuthLoginComponent } from './auth-login.component';

import { useDispatch, useSelector } from 'react-redux';

import { authLoginFormValidation } from './auth-login.validation';

import {
  AUTH_LOGIN_DATA_NAME,
  AUTH_LOGIN_STORE_NAME,
} from './auth-login.constant';

import { uploadAuthLoginForm, cleanupStore } from './auth-login.action';

import { AUTH_LOGIN_ACTION_TYPE } from './auth-login.constant';

import { convertAuthLoginFormData } from './auth-login.convert';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function AuthLoginContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[AUTH_LOGIN_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const loginFormSendData = (values) => {
    const data = convertAuthLoginFormData(values);
    dispatch(uploadAuthLoginForm(data));
  };

  const getInitialValue = () => {
    return {
      [AUTH_LOGIN_DATA_NAME.LOGIN]: '',
      [AUTH_LOGIN_DATA_NAME.PASSWORD]: '',
    };
  };

  useEffect(() => {
    return function cleanup() {
      dispatch(cleanupStore());
    };
  }, []);

  return (
    <AuthLoginComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      initialValue={getInitialValue()}
      validation={authLoginFormValidation}
      onSubmitForm={loginFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.form)}
    />
  );
}
