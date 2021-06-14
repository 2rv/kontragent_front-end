import React from 'react';
import { Formik } from 'formik';

import { AuthFormRecoveryAccountComponent } from './auth-form-recovery-account.component';

import { AUTH_FORM_RECOVERY_ACCOUNT_FIELD_KEY } from './auth-form-recovery-account.type';

export function AuthFormRecoveryAccountContainer(props) {
  const EMAIL_NAME =
    props.fieldName[AUTH_FORM_RECOVERY_ACCOUNT_FIELD_KEY.EMAIL];

  const { isPending, isError, isSuccess, errorMessage, pageLoading } = props;
  return (
    <div>
      <Formik
        initialValues={props.initialValue}
        validate={props.validation}
        onSubmit={props.onSubmitForm}
      >
        {(props) => (
          <AuthFormRecoveryAccountComponent
            fieldEmail={EMAIL_NAME}
            {...props}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            pageLoading={pageLoading}
          />
        )}
      </Formik>
    </div>
  );
}
