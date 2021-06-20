import React from 'react';

import { SectionLayout } from '../../../../lib/elements/layout';
import { FieldLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { PrimaryLoader } from '../../../../lib/elements/loader';
import { SuccessAlert } from '../../../../lib/elements/alert';

export function SignupFormComponent(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,

    fieldLogin,
    fieldPassword,
    fieldPasswordRepeat,
    fieldEmail,
    fieldFullname,
    pageLoading,
    isSuccess,
    isPending,
    isError,
    errorMessage,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid || isSubmitting || isSuccess || pageLoading;
  };

  return (
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <form onSubmit={handleSubmit}>
        <SectionLayout>
          <FieldLayout>
            <PrimaryField
              titleTid="SIGNUP.SIGNUP_FORM.FIELD.FULLNAME.TITLE"
              placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.FULLNAME.PLACEHOLDER"
              name={fieldFullname}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldFullname]}
              error={isFieldError(fieldFullname)}
            />

            <PrimaryField
              titleTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE"
              placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER"
              name={fieldLogin}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldLogin]}
              error={isFieldError(fieldLogin)}
            />

            <PrimaryField
              titleTid="SIGNUP.SIGNUP_FORM.FIELD.EMAIL.TITLE"
              placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.EMAIL.PLACEHOLDER"
              name={fieldEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldEmail]}
              error={isFieldError(fieldEmail)}
            />

            <PrimaryField
              titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE"
              placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER"
              name={fieldPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldPassword]}
              error={isFieldError(fieldPassword)}
              type="password"
            />

            <PrimaryField
              titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD_REPEAT.TITLE"
              placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD_REPEAT.PLACEHOLDER"
              name={fieldPasswordRepeat}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldPasswordRepeat]}
              error={isFieldError(fieldPasswordRepeat)}
              type="password"
            />
          </FieldLayout>
          <PrimaryButton
            tid="SIGNUP.SIGNUP_FORM.BUTTON"
            disabled={isSubmitDisabled()}
          />

          {(isError || errorMessage) && (
            <ErrorAlert tid={`ERROR.${errorMessage}`} />
          )}

          {isSuccess && (
            <SuccessAlert tid={'SIGNUP.SIGNUP_FORM.SUCCESS_MESSAGE'} />
          )}
        </SectionLayout>
      </form>
    </React.Fragment>
  );
}
