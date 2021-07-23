import React from 'react';

import { AuthAccoutInfoFormComponent } from './auth-account-info-form.component';

import {
  ACCOUNT_INFO_FORM_FIELD_NAME,
  AUTH_ACCOUNT_INFO_FORM_FIELD_NAME,
} from './auth-account-info-form.type';

const INITIAL_COMPANY_INFO_FORM_FIELD = {
  [AUTH_ACCOUNT_INFO_FORM_FIELD_NAME.COMPANY_NAME]: '',
  [AUTH_ACCOUNT_INFO_FORM_FIELD_NAME.COMPANY_INN]: '',
  [AUTH_ACCOUNT_INFO_FORM_FIELD_NAME.POSITION_IN_COMPANY]: '',
};

export function AuthAccountInfoForm() {
  const getInitialValue = () => {
    return {
      [AUTH_ACCOUNT_INFO_FORM_FIELD_NAME.FULLNAME_NAME]: '',
      [AUTH_ACCOUNT_INFO_FORM_FIELD_NAME.COMPANY_INFO_FORM_FIELDS]: [INITIAL_COMPANY_INFO_FORM_FIELD],
    };
  };

  return (
    <AuthAccoutInfoFormComponent
      initialValue={getInitialValue()}
      pageLoading={true}
      isPending={true}
      isError={true}
      isSuccess={true}
      errorMessage={null}
      accountInfoFormFieldName={ACCOUNT_INFO_FORM_FIELD_NAME}
      initialCompanyInfoFormField={INITIAL_COMPANY_INFO_FORM_FIELD}
    />
  );
}
