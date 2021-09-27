import React from 'react';

import { AuthVerificationEmailComponent } from './auth-verification-email.component';

import { useDispatch, useSelector } from 'react-redux';

import { authVerificationEmailFormValidation } from './auth-verification-email.validation';

import { AUTH_VERIFICATION_EMAIL_DATA_NAME } from './auth-verification-email.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { authUpdateUserData } from '../../lib/common/auth/auth.action';

import { httpRequest } from '../../main/http';

import { redirect } from '../../main/navigation/navigation.core';

export function AuthVerificationEmailContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    verificationEmailFormGetCode();
  }, []);

  const verificationEmailFormSendData = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      const res = await httpRequest({
        method: 'POST',
        url: `/user-verification/email/${
          data[AUTH_VERIFICATION_EMAIL_DATA_NAME.CODE]
        }`,
        data,
      });

      await authUpdateUserData()(dispatch);

      await redirect('/auth/verification/phone');

      setRequestPending(false);
      setRequestSuccess(true);
    } catch (error) {
      console.log(error);
      if (error.response) {
        setRequestError(true);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const verificationEmailFormGetCode = async (data) => {
    setRequestPending(true);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      const res = await httpRequest({
        method: 'GET',
        url: '/user-verification/email',
      });

      setRequestPending(false);
    } catch (error) {
      // if (error) {
      //   setRequestError(true);
      //   setRequestPending(false);
      //   setRequestErrorMessage(error.response.data.message);
      // }
    }
  };

  const getInitialValue = () => {
    return {
      [AUTH_VERIFICATION_EMAIL_DATA_NAME.CODE]: '',
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <AuthVerificationEmailComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      validation={authVerificationEmailFormValidation}
      onSubmitForm={verificationEmailFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
