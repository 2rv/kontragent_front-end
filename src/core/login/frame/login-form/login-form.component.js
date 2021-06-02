import React from 'react';

import styled from 'styled-components';

import { SectionLayout } from '../../../../lib/elements/layout';
import { FieldLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { CommonLoader } from '../../../../lib/elements/loader';
import { CommonError } from '../../../../lib/elements/error';

import { spacing } from '../../../../lib/theme';

export function LoginFormComponent(props) {
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
        <FieldLayout>
          <PrimaryField
            titleTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.TITLE"
            placeholderTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.PLACEHOLDER"
            name={fieldLogin}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldLogin]}
            error={isFieldError(fieldLogin)}
          />

          <PrimaryField
            titleTid="LOGIN.LOGIN_FORM.FIELD.PASSWORD.TITLE"
            placeholderTid="LOGIN.LOGIN_FORM.FIELD.PASSWORD.PLACEHOLDER"
            name={fieldPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldPassword]}
            error={isFieldError(fieldPassword)}
            type="password"
          />
        </FieldLayout>
        <PrimaryButton
          tid="LOGIN.LOGIN_FORM.BUTTON"
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
