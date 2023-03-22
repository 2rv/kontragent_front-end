import React, { useEffect } from 'react';

import { AuthRecoveryAccountComponent } from './auth-recovery-account.component';

import { useDispatch, useSelector } from 'react-redux';

import { authRecoveryAccountFormValidation } from './auth-recovery-account.validation';

import {
  AUTH_RECOVERY_ACCOUNT_DATA_NAME,
  AUTH_RECOVERY_ACCOUNT_STORE_NAME,
} from './auth-recovery-account.constant';

import { convertAuthRecoveryAccountFormData } from './auth-recovery-account.convert';

import {
  authRecoveryAccountFormSendData,
  cleanupStore,
} from './auth-recovery-account.action';

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

  const RecoveryAccountFormSendData = (values) => {
    const data = convertAuthRecoveryAccountFormData(values);
    dispatch(authRecoveryAccountFormSendData(data));
  };

  const getInitialValue = () => {
    return {
      [AUTH_RECOVERY_ACCOUNT_DATA_NAME.EMAIL]: '',
    };
  };

  useEffect(() => {
    return function cleanup() {
      dispatch(cleanupStore());
    };
  }, []);

  return (
    <AuthRecoveryAccountComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      initialValue={getInitialValue()}
      validation={authRecoveryAccountFormValidation}
      onSubmitForm={RecoveryAccountFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.form)}
    />
  );
}
