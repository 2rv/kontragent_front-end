import React from 'react';

import { SectionLayout } from '../../../../lib/elements/layout';
import { FieldLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import { SecondaryButton } from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { SuccessAlert } from '../../../../lib/elements/alert';
import { PrimaryLoader } from '../../../../lib/elements/loader';
import { CaptchaFieldContainer } from '../../../../lib/common/captcha';

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

    fieldCaptcha,
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
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
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
            <CaptchaFieldContainer
              titleTid="LOGIN.LOGIN_FORM.FIELD.CAPTCHA.TITLE"
              placeholderTid="LOGIN.LOGIN_FORM.FIELD.CAPTCHA.PLACEHOLDER"
              name={fieldCaptcha}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldCaptcha]}
              error={isFieldError(fieldCaptcha)}
            />
          </FieldLayout>
          <SecondaryButton
            tid="LOGIN.LOGIN_FORM.BUTTON"
            disabled={isSubmitDisabled()}
          />

          {(isError || errorMessage) && (
            <ErrorAlert tid={`ERROR.${errorMessage}`} />
          )}

          {isSuccess && (
            <SuccessAlert tid={'LOGIN.LOGIN_FORM.SUCCESS_MESSAGE'} />
          )}
        </SectionLayout>
      </form>
    </React.Fragment>
  );
}
