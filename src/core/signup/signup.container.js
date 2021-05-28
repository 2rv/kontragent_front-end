import React from 'react';

import styled from 'styled-components';

import { SignupFormContainer } from '../signup/frame/signup-form';
import { SignupHeaderComponent } from './frame/signup-header';
import { SignupFooterComponent } from './frame/signup-footer';

import { useDispatch, useSelector } from 'react-redux';

import { signupFormValidation } from './signup.validation';

import { SIGNUP_FORM_FIELD_NAME, SIGNUP_FIELD_NAME } from './signup.type';

import { convertSignupFormData } from './signup.convert';

import { signupFormUploadData } from './signup.action';

import { SIGNUP_STORE_NAME } from './signup.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { spacing } from '../../lib/theme';

export function SignupContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[SIGNUP_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const signupFormSendData = (values) => {
    const data = convertSignupFormData(values);
    dispatch(signupFormUploadData(data));
  };

  const signupFormGetInitialValue = () => {
    return {
      [SIGNUP_FIELD_NAME.LOGIN]: '',
      [SIGNUP_FIELD_NAME.PASSWORD]: '',
      [SIGNUP_FIELD_NAME.EMAIL]: '',
      [SIGNUP_FIELD_NAME.PASSWORD_REPEAT]: '',
    };
  };

  return (
    <SignupContainerLayout>
      <SignupHeaderComponent />
      <SignupFormContainer
        isPending={isRequestPending(state.signupForm)}
        isError={isRequestError(state.signupForm)}
        isSuccess={isRequestSuccess(state.signupForm)}
        initialValue={signupFormGetInitialValue()}
        validation={signupFormValidation}
        onSubmitForm={signupFormSendData}
        fieldName={SIGNUP_FORM_FIELD_NAME}
        pageLoading={pageLoading}
        errorMessage={getRequestErrorMessage(state.signupForm)}
      />
      <SignupFooterComponent />
    </SignupContainerLayout>
  );
}

const SignupContainerLayout = styled.div`
  display: grid;
  gap: ${spacing(4)};
`;
