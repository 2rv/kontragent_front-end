import React from 'react';
import { Formik } from 'formik';

import { ACCOUNT_INFO_FORM_FIELD_KEY } from './account-info-form.type';

import { AccountInfoFormComponent } from './account-info-form.component';

export function AccountInfoFormContainer(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    accountInfoFormFieldName,
  } = props;
  const FULLNAME_NAME =
    accountInfoFormFieldName[ACCOUNT_INFO_FORM_FIELD_KEY.FULLNAME_NAME];
  return (
    <Formik initialValues={props.initialValue}>
      {(props) => (
        <AccountInfoFormComponent
          fieldFullName={FULLNAME_NAME}
          {...props}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
          pageLoading={pageLoading}
        />
      )}
    </Formik>
  );
}
