import React, { useEffect } from 'react';

import { AuthVerificationPhoneComponent } from './auth-verification-phone.component';

import { useDispatch, useSelector } from 'react-redux';

import {
  authFormVerificationPhoneSendCode,
  authFormVerificationPhoneConfirmCode,
} from './auth-verification-phone.action';

import { AUTH_VERIFICATION_PHONE_STORE_NAME } from './auth-verification-phone.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { AUTH_STORE_NAME } from '../../lib/common/auth';

import {
  AUTH_FORM_VERIFICATION_PHONE_CONFIRM_FIELD_NAME,
  AUTH_VERIFICATION_PHONE_FIELD_NAME,
} from './auth-verification-phone.type';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { authFormVerificationPhoneValidation } from './auth-verification-phone.validation';

export function AuthVerificationPhoneContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, user } = useSelector((state) => ({
    state: state[AUTH_VERIFICATION_PHONE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    user: state[AUTH_STORE_NAME].user,
  }));

  const authVerificationPhoneSendCode = () => {
    dispatch(authFormVerificationPhoneSendCode());
  };
  useEffect(authVerificationPhoneSendCode, []);

  const authFormVerificationPhoneSendData = (values) => {
    const code = values[AUTH_VERIFICATION_PHONE_FIELD_NAME.CODE];
    dispatch(authFormVerificationPhoneConfirmCode(code));
  };

  const getInitialValue = () => {
    return {
      [AUTH_VERIFICATION_PHONE_FIELD_NAME.CODE]: '',
    };
  };

  return (
    <AuthVerificationPhoneComponent
      sendCodePending={isRequestPending(state.verificationPhone)}
      sendCodeSuccess={isRequestSuccess(state.verificationPhone)}
      sendCodeError={isRequestError(state.verificationPhone)}
      sendCodeErrorMessage={getRequestErrorMessage(state.verificationPhone)}
      sendCode={authVerificationPhoneSendCode}
      pageLoading={pageLoading}
      phone={user?.phone}
      fieldName={AUTH_FORM_VERIFICATION_PHONE_CONFIRM_FIELD_NAME}
      initialValue={getInitialValue()}
      validation={authFormVerificationPhoneValidation}
      onSubmitForm={authFormVerificationPhoneSendData}
      confirmCodePending={isRequestPending(state.verificationPhoneConfirm)}
      confirmCodeSuccess={isRequestSuccess(state.verificationPhoneConfirm)}
      confirmCodeError={isRequestError(state.verificationPhoneConfirm)}
      confirmCodeErrorMessage={getRequestErrorMessage(
        state.verificationPhoneConfirm,
      )}
    />
  );
}
