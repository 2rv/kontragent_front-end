import React from 'react';

import { AuthChangePasswordComponent } from './auth-change-password.component';

import { useDispatch, useSelector } from 'react-redux';

import { authChangePasswordFormValidation } from './auth-change-password.validation';

import {
  AUTH_CHANGE_PASSWORD_FORM_FIELD_NAME,
  AUTH_CHANGE_PASSWORD_FIELD_NAME,
} from './auth-change-password.type';

import { convertAuthChangePasswordFormData } from './auth-change-password.convert';

import { authChangePasswordFormUploadData } from './auth-change-password.action';

import { AUTH_CHANGE_PASSWORD_STORE_NAME } from './auth-change-password.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { getQuery } from '../../main/navigation';
import { REQUERED_QUERY_PARAMETR } from './auth-change-password.constant';

export function AuthChangePasswordContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[AUTH_CHANGE_PASSWORD_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const authChangePasswordFormSendData = (values) => {
    const recoveryCode = getQuery(REQUERED_QUERY_PARAMETR);
    const data = convertAuthChangePasswordFormData(values, recoveryCode);
    dispatch(authChangePasswordFormUploadData(data));
  };

  const getInitialValue = () => {
    return {
      [AUTH_CHANGE_PASSWORD_FIELD_NAME.PASSWORD]: '',
      [AUTH_CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT]: '',
    };
  };

  return (
    <AuthChangePasswordComponent
      isPending={isRequestPending(state.authChangePasswordForm)}
      isError={isRequestError(state.authChangePasswordForm)}
      isSuccess={isRequestSuccess(state.authChangePasswordForm)}
      initialValue={getInitialValue()}
      validation={authChangePasswordFormValidation}
      onSubmitForm={authChangePasswordFormSendData}
      fieldName={AUTH_CHANGE_PASSWORD_FORM_FIELD_NAME}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.authChangePasswordForm)}
    />
  );
}
