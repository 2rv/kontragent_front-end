import React from 'react';

import styled from 'styled-components';

import { SectionLayout } from '../../../../lib/elements/layout';
import { FormLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { CommonError } from '../../../../lib/elements/error';
import { CommonLoader } from '../../../../lib/elements/loader';

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
    <form onSubmit={handleSubmit}>
      <SectionLayout>
        <FormLayout>
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
        </FormLayout>
        <PrimaryButton
          tid="SIGNUP.SIGNUP_FORM.BUTTON"
          disabled={isSubmitDisabled()}
        />

        {(isError || errorMessage) && (
          <CommonError tid={`ERROR.${errorMessage}`} />
        )}
        {isPending && (
          <LoaderLayout>
            <CommonLoader width={17} height={17} />
          </LoaderLayout>
        )}
      </SectionLayout>
    </form>
  );
}

const LoaderLayout = styled.div`
  display: flex;
  justify-content: center;
`;
