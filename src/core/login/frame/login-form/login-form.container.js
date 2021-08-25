import React from 'react';
import { Formik } from 'formik';

import { LoginFormComponent } from './login-form.component';

import { LOGIN_FORM_FIELD_KEY } from './login-form.type';

export function LoginFormContainer(props) {
  const {
    fieldName,
    initialValue,
    validation,
    onSubmitForm,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
  } = props;
  const LOGIN_NAME = fieldName[LOGIN_FORM_FIELD_KEY.LOGIN];
  const PASSOWORD_NAME = fieldName[LOGIN_FORM_FIELD_KEY.PASSWORD];
  const CAPTCHA_NAME = fieldName[LOGIN_FORM_FIELD_KEY.CAPTCHA];
  return (
    <div>
      <Formik
        initialValues={initialValue}
        validate={validation}
        onSubmit={onSubmitForm}
      >
        {(props) => (
          <LoginFormComponent
            fieldPassword={PASSOWORD_NAME}
            fieldLogin={LOGIN_NAME}
            fieldCaptcha={CAPTCHA_NAME}
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
