import React from 'react';

import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { SuccessAlert } from '../../../../lib/elements/alert';
import { PrimaryLoader } from '../../../../lib/elements/loader';
import styled from 'styled-components';

export function Settings2FAFormComponent(props) {
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
          <Title tid="SETTINGS.2FA.TITLE" />
          <form onSubmit={handleSubmit}>
            <SectionLayout>
              <SectionLayout>
                <PrimaryField
                  titleTid="SETTINGS.2FA.FIELD.PHONE_NUMBER.TITLE"
                  placeholderTid="SETTINGS.2FA.FIELD.PHONE_NUMBER.PLACEHOLDER"
                  name={fieldPhoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[fieldPhoneNumber]}
                  error={isFieldError(fieldPhoneNumber)}
                />

                <PrimaryButton
                  tid="SETTINGS.2FA.BUTTON"
                  disabled={isSubmitDisabled()}
                />
              </SectionLayout>

              {(isError || errorMessage) && (
                <ErrorAlert tid={`ERROR.${errorMessage}`} />
              )}

              {isSuccess && (
                <SuccessAlert tid={'SETTINGS.2FA.SUCCESS_MESSAGE'} />
              )}
            </SectionLayout>
          </form>
        </SectionLayout>
      </IndentLayout>
    </React.Fragment>
  );
}
const Title = styled(SecondaryTitleText)`
  line-height: 1.5;
`;
