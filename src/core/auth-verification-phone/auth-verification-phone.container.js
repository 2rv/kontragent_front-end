import React from 'react';

import { AuthVerificationPhoneComponent } from './auth-verification-phone.component';

import { useDispatch, useSelector } from 'react-redux';

import { authVerificationPhoneFormValidation } from './auth-verification-phone.validation';

import { AUTH_VERIFICATION_PHONE_DATA_NAME } from './auth-verification-phone.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { httpRequest } from '../../main/http';
import { authUpdateUserData } from '../../lib/common/auth/auth.action';

import { redirect } from '../../main/navigation/navigation.core';

export function AuthVerificationPhoneContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    VerificationPhoneFormGetCode();
  }, []);

  const VerificationPhoneFormSendData = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      const res = await httpRequest({
        method: 'POST',
        url: `/user-verification/phone/${
          data[AUTH_VERIFICATION_PHONE_DATA_NAME.CODE]
        }`,
        data,
      });

      await authUpdateUserData()(dispatch);

      await redirect('/');

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

  const VerificationPhoneFormGetCode = async (data) => {
    setRequestPending(true);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      const res = await httpRequest({
        method: 'GET',
        url: '/user-verification/phone',
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
      [AUTH_VERIFICATION_PHONE_DATA_NAME.CODE]: '',
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <AuthVerificationPhoneComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      validation={authVerificationPhoneFormValidation}
      onSubmitForm={VerificationPhoneFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
