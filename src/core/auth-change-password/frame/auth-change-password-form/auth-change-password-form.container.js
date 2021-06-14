import React from 'react';
import { Formik } from 'formik';

import { AuthChangePasswordFormComponent } from './auth-change-password-form.component';

import { AUTH_CHANGE_PASSWORD_FORM_FIELD_KEY } from './auth-change-password-form.type';

export function AuthChangePasswordFormContainer(props) {
  const PASSOWORD_NAME =
    props.fieldName[AUTH_CHANGE_PASSWORD_FORM_FIELD_KEY.PASSWORD];

  const PASSWORD_REPEAT_NAME =
    props.fieldName[AUTH_CHANGE_PASSWORD_FORM_FIELD_KEY.PASSWORD_REPEAT];

  const { isPending, isError, isSuccess, errorMessage, pageLoading } = props;
  return (
    <div>
      <Formik
        initialValues={props.initialValue}
        validate={props.validation}
        onSubmit={props.onSubmitForm}
      >
        {(props) => (
          <AuthChangePasswordFormComponent
            fieldPassword={PASSOWORD_NAME}
            fieldPasswordRepeat={PASSWORD_REPEAT_NAME}
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
