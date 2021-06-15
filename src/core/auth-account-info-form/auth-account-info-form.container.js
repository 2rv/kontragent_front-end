import React from 'react';

import { AuthAccoutInfoFormConmponent } from './auth-account-info-form.component';

import {
  AUTH_ACCOUNT_INFO_FORM_FIELD_NAME,
  ACCOUNT_INFO_FORM_FIELD_NAME,
} from './auth-account-info-form.type';

export function AuthAccountInfoForm() {
  const getInitialValue = () => {
    return {
      [AUTH_ACCOUNT_INFO_FORM_FIELD_NAME.FULLNAME_NAME]: '',
    };
  };

  return (
    <AuthAccoutInfoFormConmponent
      initialValue={getInitialValue()}
      pageLoading={true}
      isPending={true}
      isError={true}
      isSuccess={true}
      errorMessage={null}
      accountInfoFormFieldName={ACCOUNT_INFO_FORM_FIELD_NAME}
    />
  );
}
