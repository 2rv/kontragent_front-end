import React from 'react';

import { SupportCreateRequestComponent } from './support-create-request.component';

import {
  SUPPORT_CREATE_REQUEST_FIELD_NAME,
  SUPPORT_FORM_CREATE_REQUEST_FIELD_NAME,
} from './support-create-request.type';

export function SupportCreateRequestContainer() {
  const getInitialValue = () => {
    return {
      [SUPPORT_CREATE_REQUEST_FIELD_NAME.PROBLEM_CATEGORY]: 0,
      [SUPPORT_CREATE_REQUEST_FIELD_NAME.PROBLEM_OUTLINE]: '',
      [SUPPORT_CREATE_REQUEST_FIELD_NAME.PROBLEM_DESCRIPTION]: '',
    };
  };

  return (
    <SupportCreateRequestComponent
      isPending={true}
      isError={true}
      isSuccess={true}
      initialValue={getInitialValue()}
      fieldName={SUPPORT_FORM_CREATE_REQUEST_FIELD_NAME}
      pageLoading={true}
      errorMessage={'error'}
    />
  );
}
