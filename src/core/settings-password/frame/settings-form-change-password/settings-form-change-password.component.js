import React from 'react';

import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { PrimaryField } from '../../../../lib/elements/field';
import { SecondaryButton } from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { SuccessAlert } from '../../../../lib/elements/alert';
import { PrimaryLoader } from '../../../../lib/elements/loader';

import { } from '../../../../lib/theme';

export function SettingsFormChangePasswordComponent(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,

    pageLoading,
    fieldPassword,
    fieldPhoneNumber,
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
      <IndentLayout>
        <SectionLayout>
          <SecondaryTitleText tid="SETTINGS.PASSWORD.TITLE" />
          <form onSubmit={handleSubmit}>
            <SectionLayout>
              <PrimaryField
                titleTid="SETTINGS.PASSWORD.FIELD.NEW_PASSWORD.TITLE"
                placeholderTid="SETTINGS.PASSWORD.FIELD.NEW_PASSWORD.PLACEHOLDER"
                name={fieldPhoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[fieldPhoneNumber]}
                error={isFieldError(fieldPhoneNumber)}
              />

              <PrimaryField
                titleTid="SETTINGS.PASSWORD.FIELD.REPEAT_NEW_PASSWORD.TITLE"
                placeholderTid="SETTINGS.PASSWORD.FIELD.REPEAT_NEW_PASSWORD.PLACEHOLDER"
                name={fieldPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[fieldPassword]}
                error={isFieldError(fieldPassword)}
              />

              <PrimaryField
                titleTid="SETTINGS.PASSWORD.FIELD.OLD_PASSWORD.TITLE"
                placeholderTid="SETTINGS.PASSWORD.FIELD.OLD_PASSWORD.PLACEHOLDER"
                name={fieldPhoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[fieldPhoneNumber]}
                error={isFieldError(fieldPhoneNumber)}
              />

              <SecondaryButton
                tid="SETTINGS.PASSWORD.BUTTON"
                disabled={isSubmitDisabled()}
              />

              {(isError || errorMessage) && (
                <ErrorAlert tid={`ERROR.${errorMessage}`} />
              )}

              {isSuccess && (
                <SuccessAlert tid={'SETTINGS.PASSWORD.SUCCESS_MESSAGE'} />
              )}
            </SectionLayout>
          </form>
        </SectionLayout>
      </IndentLayout>
    </React.Fragment>
  );
}
