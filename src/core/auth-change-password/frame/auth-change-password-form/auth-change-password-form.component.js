import React from 'react';

import { SectionLayout } from '../../../../lib/elements/layout';
import { FieldLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { CommonError } from '../../../../lib/elements/error';
import { PrimaryLoader } from '../../../../lib/elements/loader';

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
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
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
        </SectionLayout>
      </form>
    </React.Fragment>
  );
}
