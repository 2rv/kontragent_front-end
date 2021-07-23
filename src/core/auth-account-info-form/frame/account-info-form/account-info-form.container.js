import React from 'react';
import { Formik } from 'formik';

import { ACCOUNT_INFO_FORM_FIELD_KEY } from './account-info-form.type';

import { AccountInfoFormComponent } from './account-info-form.component';

export function AccountInfoFormContainer(props) {
  const {
    initialValue,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    accountInfoFormFieldName,
    initialCompanyInfoFormField,
  } = props;

  const onSubmitForm = (values) => {
    console.log('values: ', values);
  };

  const FULLNAME_NAME = accountInfoFormFieldName[ACCOUNT_INFO_FORM_FIELD_KEY.FULLNAME_NAME];
  const COMPANY_INFO_FORM_FIELDS = accountInfoFormFieldName[ACCOUNT_INFO_FORM_FIELD_KEY.COMPANY_INFO_FORM_FIELDS];
  const COMPANY_NAME = accountInfoFormFieldName[ACCOUNT_INFO_FORM_FIELD_KEY.COMPANY_NAME];
  const COMPANY_INN = accountInfoFormFieldName[ACCOUNT_INFO_FORM_FIELD_KEY.COMPANY_INN];
  const POSITION_IN_COMPANY = accountInfoFormFieldName[ACCOUNT_INFO_FORM_FIELD_KEY.POSITION_IN_COMPANY];

  return (
    <Formik initialValues={initialValue} onSubmit={onSubmitForm}>
      {(props) => (
        <AccountInfoFormComponent
          fieldFullName={FULLNAME_NAME}
          fieldCompanyInfoFormFields={COMPANY_INFO_FORM_FIELDS}
          fieldCompanyName={COMPANY_NAME}
          fieldCompanyInn={COMPANY_INN}
          fieldPositionInCompany={POSITION_IN_COMPANY}
          initialCompanyInfoFormField={initialCompanyInfoFormField}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
          pageLoading={pageLoading}
          {...props}
        />
      )}
    </Formik>
  );
}
