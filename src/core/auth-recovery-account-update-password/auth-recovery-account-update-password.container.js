import React from 'react';

import { AuthRecoveryAccountUpdatePasswordComponent } from './auth-recovery-account-update-password.component';

import { useDispatch, useSelector } from 'react-redux';

import { authRecoveryAccountUpdatePasswordFormValidation } from './auth-recovery-account-update-password.validation';

import { AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME } from './auth-recovery-account-update-password.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { httpRequest } from '../../main/http';

import { redirect } from '../../main/navigation/navigation.core';

export function AuthRecoveryAccountUpdatePasswordContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const RecoveryAccountUpdatePasswordFormSendData = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      const res = await httpRequest({
        method: 'POST',
        url: `/user-recovery/change-password/`,
        data,
      });

      await redirect('/company');

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
      [AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_DATA_NAME.EMAIL]: '',
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <AuthRecoveryAccountUpdatePasswordComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      validation={authRecoveryAccountUpdatePasswordFormValidation}
      onSubmitForm={RecoveryAccountUpdatePasswordFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
