import React from 'react';
import { SupportCreateRequestComponent } from './support-create-request.component';
import {
  SUPPORT_CREATE_REQUEST_FIELD_NAME,
  SUPPORT_FORM_CREATE_REQUEST_FIELD_NAME,
} from './support-create-request.type';
import { useDispatch, useSelector } from 'react-redux';
import { supportCreateRequestFormValidation } from './support-create-request.validation';
import { convertSupportCreateRequestFormData } from './support-create-request.convert';
import { supportCreateRequestFormUploadData } from './support-create-request.action';
import { SUPPORT_CREATE_REQUEST_STORE_NAME } from './support-create-request.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function SupportCreateRequestContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[SUPPORT_CREATE_REQUEST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const signupFormSendData = (values) => {
    const data = convertSupportCreateRequestFormData(values);
    dispatch(supportCreateRequestFormUploadData(data));
  };
  const getInitialValue = () => {
    return {
      [SUPPORT_CREATE_REQUEST_FIELD_NAME.PROBLEM_CATEGORY]: 0,
      [SUPPORT_CREATE_REQUEST_FIELD_NAME.PROBLEM_OUTLINE]: '',
      [SUPPORT_CREATE_REQUEST_FIELD_NAME.PROBLEM_DESCRIPTION]: '',
    };
  };

  return (
    <SupportCreateRequestComponent
      isPending={isRequestPending(state.supportCreateRequestForm)}
      isError={isRequestError(state.supportCreateRequestForm)}
      isSuccess={isRequestSuccess(state.supportCreateRequestForm)}
      initialValue={getInitialValue()}
      validation={supportCreateRequestFormValidation}
      onSubmitForm={signupFormSendData}
      fieldName={SUPPORT_FORM_CREATE_REQUEST_FIELD_NAME}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.supportCreateRequestForm)}
      problemCategory={SelectProblemCategory}
    />
  );
}

export const SelectProblemCategory = [
  { id: 0, tid: 'Проблема с доступом к аккаунту' },
  { id: 1, tid: 'Тест 2' },
  { id: 2, tid: 'DATA.PROBLEM_CATEGORY.3' },
];
