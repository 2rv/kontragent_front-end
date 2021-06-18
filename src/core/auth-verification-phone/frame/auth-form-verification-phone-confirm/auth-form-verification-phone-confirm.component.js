import React from 'react';

import { SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { PrimaryLoader } from '../../../../lib/elements/loader';
import { SuccessAlert } from '../../../../lib/elements/alert';
import { PrimaryTitleText } from '../../../../lib/elements/text';

export function AuthFormVerificationPhoneConfirmComponent(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,

    fieldCode,
    pageLoading,
    confirmCodePending,
    confirmCodeSuccess,
    confirmCodeError,
    confirmCodeErrorMessage,
  } = props;

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid || isSubmitting || confirmCodeSuccess || pageLoading;
  };

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  return (
    <React.Fragment>
      {(confirmCodePending || pageLoading) && <PrimaryLoader />}
      <SectionLayout>
        <PrimaryTitleText tid="AUTH_VERIFICATION_PHONE.FORM.HEADER" />
        <form onSubmit={handleSubmit}>
          <SectionLayout>
            <PrimaryField
              titleTid="AUTH_VERIFICATION_PHONE.FORM.CODE_FIELD.TITLE"
              placeholderTid="AUTH_VERIFICATION_PHONE.FORM.CODE_FIELD.PLACEHOLDER"
              name={fieldCode}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldCode]}
              error={isFieldError(fieldCode)}
            />

            <PrimaryButton
              tid="AUTH_VERIFICATION_PHONE.FORM.BUTTON"
              disabled={isSubmitDisabled()}
            />

            {(confirmCodeError || confirmCodeErrorMessage) && (
              <ErrorAlert tid={`ERROR.${confirmCodeErrorMessage}`} />
            )}

            {confirmCodeSuccess && (
              <SuccessAlert
                tid={'AUTH_VERIFICATION_PHONE.FORM.SUCCESS_MESSAGE'}
              />
            )}
          </SectionLayout>
        </form>
      </SectionLayout>
    </React.Fragment>
  );
}
