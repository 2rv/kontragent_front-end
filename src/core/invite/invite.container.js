import React, { useEffect } from 'react';

import { InviteComponent } from './invite.component';

import { useDispatch, useSelector } from 'react-redux';

import { inviteFormValidation } from './invite.validation';

import {
  INVITE_DATA_NAME,
  INVITE_STORE_NAME,
} from './invite.constant';

import { uploadInviteForm, cleanupStore } from './invite.action';

import { convertInviteFormData } from './invite.convert';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function InviteContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[INVITE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const inviteFormSendData = (values) => {
    const data = convertInviteFormData(values);
    dispatch(uploadInviteForm(data));
  };

  const getInitialValue = () => {
    return {
      [INVITE_DATA_NAME.EMAIL]: '',
    };
  };

  useEffect(() => {
    return function cleanup() {
      dispatch(cleanupStore());
    };
  }, []);

  return (
    <InviteComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      initialValue={getInitialValue()}
      validation={inviteFormValidation}
      onSubmitForm={inviteFormSendData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.form)}
    />
  );
}
