import React from 'react';
import {
  SectionLayout,
  IndentLayout,
  FieldLayout,
} from '../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../lib/elements/text';
import { PrimaryField } from '../../../lib/elements/field';
import { PrimaryButton } from '../../../lib/elements/button';
import { ErrorAlert } from '../../../lib/elements/alert';
import { SuccessAlert } from '../../../lib/elements/alert';
import { PrimaryLoader } from '../../../lib/elements/loader';
import { PrimaryBox } from '../../../lib/elements/box';

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

    FormPending,
    FormError,
    FormSuccess,
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
      {(FormPending || pageLoading || dataPending) && <PrimaryLoader />}
      <PrimaryBox>
        <IndentLayout>
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
                    type="password"
                  />
                </FieldLayout>

                <PrimaryButton
                  tid="SETTINGS.EMAIL.BUTTON"
                  disabled={isSubmitDisabled()}
                />

                {(FormError || FormErrorMessage) && (
                  <ErrorAlert tid={`ERROR.${FormErrorMessage}`} />
                )}

                {(dataError || dataErrorMessage) && (
                  <ErrorAlert tid={`ERROR.${dataErrorMessage}`} />
                )}

                {FormSuccess && (
                  <SuccessAlert tid={'SETTINGS.EMAIL.SUCCESS_MESSAGE'} />
                )}
              </SectionLayout>
            </form>
          </SectionLayout>
        </IndentLayout>
      </PrimaryBox>
    </React.Fragment>
  );
}
