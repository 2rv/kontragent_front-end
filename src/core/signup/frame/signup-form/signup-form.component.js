import React from 'react';

import styled from 'styled-components';

import { PrimaryField } from '../../../../lib/elements/field';
import { FieldLayout } from '../../../../lib/elements/layout';
import { PrimaryButton } from '../../../../lib/elements/button';
import { CommonLoader } from '../../../../lib/elements/loader';
import { CommonError } from '../../../../lib/elements/error';

import { spacing } from '../../../../lib/theme';

export function SignupFormComponent(props) {
  const {
    fieldLogin,
    fieldPassword,
    fieldPasswordRepeat,
    fieldEmail,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return isPending || isSuccess;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <FieldLayout>
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
          valueTid="SIGNUP.SIGNUP_FORM.BUTTON"
          disabled={isSubmitDisabled()}
        />

        {errorMessage && <CommonError tid={`ERROR.${errorMessage}`} />}
        {isPending && (
          <LoaderLayout>
            <CommonLoader width={17} height={17} />
          </LoaderLayout>
        )}
      </Container>
    </form>
  );
}

const LoaderLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: grid;
  gap: ${spacing(4)};
`;
