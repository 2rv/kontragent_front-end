import React from 'react';

import { AuthRecoveryAccountComponent } from './auth-recovery-account.component';

import { useDispatch, useSelector } from 'react-redux';

import { authRecoveryAccountFormValidation } from './auth-recovery-account.validation';

import { AUTH_RECOVERY_ACCOUNT_DATA_NAME } from './auth-recovery-account.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { httpRequest } from '../../main/http';

import { redirect } from '../../main/navigation/navigation.core';

export function AuthRecoveryAccountContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const RecoveryAccountFormSendData = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      const res = await httpRequest({
        method: 'POST',
        url: `/user-recovery/email/`,
        data,
      });

      await redirect('/auth/recovery-account/update-password');

      setRequestPending(false);
      setRequestSuccess(true);
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
      [AUTH_RECOVERY_ACCOUNT_DATA_NAME.EMAIL]: '',
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <AuthRecoveryAccountComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      validation={authRecoveryAccountFormValidation}
      onSubmitForm={RecoveryAccountFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
