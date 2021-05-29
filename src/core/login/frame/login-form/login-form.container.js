import React from 'react';
import { Formik } from 'formik';

import { LoginFormComponent } from './login-form.component';

import { LOGIN_FORM_FIELD_KEY } from './login-form.type';

export function LoginFormContainer(props) {
  const LOGIN_NAME = props.fieldName[LOGIN_FORM_FIELD_KEY.LOGIN];
  const PASSOWORD_NAME = props.fieldName[LOGIN_FORM_FIELD_KEY.PASSWORD];
  const { isPending, isError, isSuccess, errorMessage, pageLoading } = props;
  return (
    <div>
      <Formik
        initialValues={props.initialValue}
        validate={props.validation}
        onSubmit={props.onSubmitForm}
      >
        {(props) => (
          <LoginFormComponent
            fieldPassword={PASSOWORD_NAME}
            fieldLogin={LOGIN_NAME}
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

export default LoginFormContainer;
