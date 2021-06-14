import React from 'react';

import styled from 'styled-components';

import { SectionLayout } from '../../../../lib/elements/layout';
import { FieldLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { CommonLoader } from '../../../../lib/elements/loader';
import { CommonError } from '../../../../lib/elements/error';

export function AuthChangePasswordFormComponent(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,

    fieldPassword,
    fieldPasswordRepeat,
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
            titleTid="AUTH_CHANGE_PASSWORD.FORM_FIELD.PASSWORD.TITLE"
            placeholderTid="AUTH_CHANGE_PASSWORD.FORM_FIELD.PASSWORD.PLACEHOLDER"
            name={fieldPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldPassword]}
            error={isFieldError(fieldPassword)}
            type="password"
          />

          <PrimaryField
            titleTid="AUTH_CHANGE_PASSWORD.FORM_FIELD.PASSWORD_REPEAT.TITLE"
            placeholderTid="AUTH_CHANGE_PASSWORD.FORM_FIELD.PASSWORD_REPEAT.PLACEHOLDER"
            name={fieldPasswordRepeat}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldPasswordRepeat]}
            error={isFieldError(fieldPasswordRepeat)}
            type="password"
          />
        </FieldLayout>
        <PrimaryButton
          tid="AUTH_CHANGE_PASSWORD.BUTTON"
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
