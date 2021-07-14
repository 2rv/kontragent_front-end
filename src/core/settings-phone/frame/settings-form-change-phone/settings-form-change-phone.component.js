import React from 'react';
import styled from 'styled-components';

import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { PrimaryBox } from '../../../../lib/elements/box';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { PrimaryField } from '../../../../lib/elements/field';
import { SecondaryButton } from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { SuccessAlert } from '../../../../lib/elements/alert';
import { PrimaryLoader } from '../../../../lib/elements/loader';

import { spacing } from '../../../../lib/theme';

export function SettingsFormChangePhoneComponent(props) {
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
          <SecondaryTitleText tid="SETTINGS.PHONE.TITLE" />
          <form onSubmit={handleSubmit}>
            <SectionLayout>
              <PrimaryField
                titleTid="SETTINGS.PHONE.FIELD.PHONE_NUMBER.TITLE"
                placeholderTid="SETTINGS.PHONE.FIELD.PHONE_NUMBER.PLACEHOLDER"
                name={fieldPhoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[fieldPhoneNumber]}
                error={isFieldError(fieldPhoneNumber)}
              />

              <PrimaryField
                titleTid="SETTINGS.PHONE.FIELD.PASSWORD.TITLE"
                placeholderTid="SETTINGS.PHONE.FIELD.PASSWORD.PLACEHOLDER"
                name={fieldPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[fieldPassword]}
                error={isFieldError(fieldPassword)}
              />

              <SecondaryButton
                tid="SETTINGS.PHONE.BUTTON"
                disabled={isSubmitDisabled()}
              />

              {(isError || errorMessage) && (
                <ErrorAlert tid={`ERROR.${errorMessage}`} />
              )}

              {isSuccess && (
                <SuccessAlert tid={'SETTINGS.PHONE.SUCCESS_MESSAGE'} />
              )}
            </SectionLayout>
          </form>
        </SectionLayout>
      </IndentLayout>
    </React.Fragment>
  );
}
