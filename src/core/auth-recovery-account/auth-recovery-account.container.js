import React from 'react';

import { AuthRecoveryAccountComponent } from './auth-recovery-account.component';

import { useDispatch, useSelector } from 'react-redux';

import { authFormRecoveryValidation } from './auth-recovery-account.validation';

import {
  AUTH_FORM_RECOVERY_ACCOUNT_FIELD_NAME,
  AUTH_RECOVERY_ACCOUNT_FIELD_NAME,
} from './auth-recovery-account.type';

import { convertAuthFormRecoveryAccountData } from './auth-recovery-account.convert';

import { authFormRecoveryAccountUploadData } from './auth-recovery-account.action';

import { AUTH_RECOVERY_ACCOUNT_STORE_NAME } from './auth-recovery-account.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function AuthRecoveryAccountContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[AUTH_RECOVERY_ACCOUNT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const authFormRecoveryAccountSendData = (values) => {
    const data = convertAuthFormRecoveryAccountData(values);
    dispatch(authFormRecoveryAccountUploadData(data));
  };

  const getInitialValue = () => {
    return {
      [AUTH_RECOVERY_ACCOUNT_FIELD_NAME.EMAIL]: '',
    };
  };

  return (
    <AuthRecoveryAccountComponent
      isPending={isRequestPending(state.authFormRecoveryAccount)}
      isError={isRequestError(state.authFormRecoveryAccount)}
      isSuccess={isRequestSuccess(state.authFormRecoveryAccount)}
      initialValue={getInitialValue()}
      validation={authFormRecoveryValidation}
      onSubmitForm={authFormRecoveryAccountSendData}
      fieldName={AUTH_FORM_RECOVERY_ACCOUNT_FIELD_NAME}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.authFormRecoveryAccount)}
    />
  );
}
