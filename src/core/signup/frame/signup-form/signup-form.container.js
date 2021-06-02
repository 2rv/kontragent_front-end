import React from 'react';
import { Formik } from 'formik';

import { SignupFormComponent } from './signup-form.component';

import { SIGNUP_FORM_FIELD_KEY } from './signup-form.type';

export function SignupFormContainer(props) {
  const LOGIN_NAME = props.fieldName[SIGNUP_FORM_FIELD_KEY.LOGIN];
  const PASSOWORD_NAME = props.fieldName[SIGNUP_FORM_FIELD_KEY.PASSWORD];
  const PASSWORD_REPEAT_NAME =
    props.fieldName[SIGNUP_FORM_FIELD_KEY.PASSWORD_REPEAT];
  const EMAIL_NAME = props.fieldName[SIGNUP_FORM_FIELD_KEY.EMAIL];
  const { isPending, isError, isSuccess, errorMessage, pageLoading } = props;
  return (
    <div>
      <Formik
        initialValues={props.initialValue}
        validate={props.validation}
        onSubmit={props.onSubmitForm}
      >
        {(props) => (
          <SignupFormComponent
            fieldPassword={PASSOWORD_NAME}
            fieldLogin={LOGIN_NAME}
            fieldPasswordRepeat={PASSWORD_REPEAT_NAME}
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

export default SignupFormContainer;
