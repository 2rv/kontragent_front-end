import React from 'react';

import { AuthRecoveryAccountUpdatePasswordComponent } from './auth-recovery-account-update-password.component';

import { useDispatch, useSelector } from 'react-redux';

import { authRecoveryAccountUpdatePasswordFormValidation } from './auth-recovery-account-update-password.validation';

import { convertAuthRecoveryAccountUpdatePasswordFormData } from './auth-recovery-account-update-password.convert';

import { AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME, AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_STORE_NAME } from './auth-recovery-account-update-password.constant';

import { updatePasswordSendFormData } from './auth-recovery-account-update-password.action';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function AuthRecoveryAccountUpdatePasswordContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const RecoveryAccountUpdatePasswordFormSendData = (values) => {
    const data = convertAuthRecoveryAccountUpdatePasswordFormData(values);
    dispatch(updatePasswordSendFormData(data));
  };

  const getInitialValue = () => {
    return {
      [AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.CODE]: '',
      [AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.PASSWORD]: '',
      [AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.PASSWORD_REPEAT]: '',
    };
  };

  return (
    <AuthRecoveryAccountUpdatePasswordComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      initialValue={getInitialValue()}
      validation={authRecoveryAccountUpdatePasswordFormValidation}
      onSubmitForm={RecoveryAccountUpdatePasswordFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.form)}
    />
  );
}
