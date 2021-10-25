import React from 'react';

import { AuthVerificationPhoneComponent } from './auth-verification-phone.component';

import { useDispatch, useSelector } from 'react-redux';

import { authVerificationPhoneFormValidation } from './auth-verification-phone.validation';
import { LOCAL_STORAGE_KEY } from '../auth-referal/auth-referal.constant';
import {
  verificationPhoneFormFetchData,
  verificationPhoneFormGetCode,
} from './auth-verification-phone.action';

import { convertAuthVerificationPhoneFormData } from './auth-verification-phone.convert';

import {
  AUTH_VERIFICATION_PHONE_DATA_NAME,
  AUTH_VERIFICATION_PHONE_STORE_NAME,
} from './auth-verification-phone.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  getLocalData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function AuthVerificationPhoneContainer() {
  const { state, pageLoading } = useSelector((state) => ({
    state: state[AUTH_VERIFICATION_PHONE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(verificationPhoneFormGetCode());
  }, []);

  const VerificationPhoneFormSendData = (values) => {
    const data = convertAuthVerificationPhoneFormData(values);
    const referalIdData = getLocalData(LOCAL_STORAGE_KEY);
    dispatch(
      verificationPhoneFormFetchData(
        data,
        data[AUTH_VERIFICATION_PHONE_DATA_NAME.CODE],
        referalIdData,
      ),
    );
  };

  const getInitialValue = () => {
    return {
      [AUTH_VERIFICATION_PHONE_DATA_NAME.CODE]: '',
    };
  };

  return (
    <AuthVerificationPhoneComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      initialValue={getInitialValue()}
      validation={authVerificationPhoneFormValidation}
      onSubmitForm={VerificationPhoneFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.form)}
    />
  );
}
