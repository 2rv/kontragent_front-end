import React from 'react';

import { AuthSignupComponent } from './auth-signup.component';

import { useDispatch, useSelector } from 'react-redux';

import { authSignupFormValidation } from './auth-signup.validation';

import { convertAuthSignupFormData } from './auth-signup.convert';

import { uploadAuthSignupForm } from './auth-signup.action';

import {
  AUTH_SIGNUP_STORE_NAME,
  AUTH_SIGNUP_DATA_NAME,
} from './auth-signup.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function AuthSignupContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[AUTH_SIGNUP_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const signupFormSendData = (values) => {
    const data = convertAuthSignupFormData(values);
    dispatch(uploadAuthSignupForm(data));
  };

  const getInitialValue = () => {
    return {
      [AUTH_SIGNUP_DATA_NAME.LOGIN]: '',
      [AUTH_SIGNUP_DATA_NAME.PASSWORD]: '',
      [AUTH_SIGNUP_DATA_NAME.EMAIL]: '',
      [AUTH_SIGNUP_DATA_NAME.PASSWORD_REPEAT]: '',
      [AUTH_SIGNUP_DATA_NAME.FIRST_NAME]: '',
      [AUTH_SIGNUP_DATA_NAME.LAST_NAME]: '',
      [AUTH_SIGNUP_DATA_NAME.PHONE]: '',
    };
  };

  return (
    <AuthSignupComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      initialValue={getInitialValue()}
      validation={authSignupFormValidation}
      onSubmitForm={signupFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.form)}
    />
  );
}
