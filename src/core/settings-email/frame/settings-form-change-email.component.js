import React from 'react';

import {
  SectionLayout,
  FieldLayout,
  ButtonLayout,
} from '../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../lib/elements/text';
import { PrimaryField } from '../../../lib/elements/field';
import { SecondaryButton } from '../../../lib/elements/button';
import { ErrorAlert } from '../../../lib/elements/error';
import { SuccessAlert } from '../../../../lib/elements/alert';
import { PrimaryLoader } from '../../../lib/elements/loader';

export function SettingsFormChangeEmailComponent(props) {
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
    fieldEmail,
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
      <SectionLayout>
        <SecondaryTitleText tid="SETTINGS.EMAIL.TITLE" />
        <form onSubmit={handleSubmit}>
          <SectionLayout>
            <FieldLayout type="double">
              <PrimaryField
                titleTid="SETTINGS.EMAIL.FIELD.EMAIL.TITLE"
                placeholderTid="SETTINGS.EMAIL.FIELD.EMAIL.PLACEHOLDER"
                name={fieldEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[fieldEmail]}
                error={isFieldError(fieldEmail)}
              />

              <PrimaryField
                titleTid="SETTINGS.EMAIL.FIELD.PASSWORD.TITLE"
                placeholderTid="SETTINGS.EMAIL.FIELD.PASSWORD.PLACEHOLDER"
                name={fieldPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[fieldPassword]}
                error={isFieldError(fieldPassword)}
              />
            </FieldLayout>

            <ButtonLayout type="double">
              <SecondaryButton
                tid="SETTINGS.EMAIL.BUTTON"
                disabled={isSubmitDisabled()}
              />
            </ButtonLayout>

            {(isError || errorMessage) && (
              <ErrorAlert tid={`ERROR.${errorMessage}`} />
            )}

            {isSuccess && (
              <SuccessAlert tid={'SETTINGS.EMAIL.SUCCESS_MESSAGE'} />
            )}
          </SectionLayout>
        </form>
      </SectionLayout>
    </React.Fragment>
  );
}
