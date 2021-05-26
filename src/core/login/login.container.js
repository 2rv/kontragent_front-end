import React from 'react';

import { LoginFormContainer } from '../login/frame/login-form';
import { LoginHeaderComponent } from './frame/login-header';
import { LoginFooterComponent } from './frame/login-footer';

import { useDispatch, useSelector } from 'react-redux';

import { loginFormValidation } from './login.validation';

import { LOGIN_FORM_FIELD_NAME, LOGIN_FIELD_NAME } from './login.type';

import { convertLoginFormData } from './login.convert';

import { loginFormUploadData } from './login.action';

import { LOGIN_STORE_NAME } from './login.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function LoginContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[LOGIN_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const loginFormSendData = (values) => {
    const data = convertLoginFormData(values);
    dispatch(loginFormUploadData(data));
  };

  const loginFormGetInitialValue = () => {
    return {
      [LOGIN_FIELD_NAME.LOGIN]: '',
      [LOGIN_FIELD_NAME.PASSWORD]: '',
    };
  };

  return (
    <>
      <LoginHeaderComponent />
      <LoginFormContainer
        isPending={isRequestPending(state.loginForm)}
        isError={isRequestError(state.loginForm)}
        isSuccess={isRequestSuccess(state.loginForm)}
        initialValue={loginFormGetInitialValue()}
        validation={loginFormValidation}
        onSubmitForm={loginFormSendData}
        fieldName={LOGIN_FORM_FIELD_NAME}
        pageLoading={pageLoading}
        errorMessage={getRequestErrorMessage(state.loginForm)}
      />
      <LoginFooterComponent />
    </>
  );
}
