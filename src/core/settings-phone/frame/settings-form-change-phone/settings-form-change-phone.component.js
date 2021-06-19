import React from 'react';

import {
  SectionLayout,
  FieldLayout,
  ButtonLayout,
} from '../../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { PrimaryField } from '../../../../lib/elements/field';
import { SecondaryButton } from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { SuccessAlert } from '../../../../lib/elements/alert';
import { PrimaryLoader } from '../../../../lib/elements/loader';

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

    FormSuccess,
    FormPending,
    FormError,
    FormErrorMessage,

    dataPending,
    dataError,
    dataErrorMessage,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid || isSubmitting || FormSuccess || pageLoading || dataPending;
  };

  return (
    <React.Fragment>
      {(FormPending || pageLoading) && <PrimaryLoader />}
      <SectionLayout>
        <SecondaryTitleText tid="SETTINGS.PHONE.TITLE" />
        <form onSubmit={handleSubmit}>
          <SectionLayout>
            <FieldLayout type="double">
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
                type="password"
              />
            </FieldLayout>

            <ButtonLayout type="double">
              <SecondaryButton
                tid="SETTINGS.PHONE.BUTTON"
                disabled={isSubmitDisabled()}
              />
            </ButtonLayout>

            {(FormError || FormErrorMessage) && (
              <ErrorAlert tid={`ERROR.${FormErrorMessage}`} />
            )}

            {(dataError || dataErrorMessage) && (
              <ErrorAlert tid={`ERROR.${dataErrorMessage}`} />
            )}

            {FormSuccess && (
              <SuccessAlert tid={'SETTINGS.PHONE.SUCCESS_MESSAGE'} />
            )}
          </SectionLayout>
        </form>
      </SectionLayout>
    </React.Fragment>
  );
}
