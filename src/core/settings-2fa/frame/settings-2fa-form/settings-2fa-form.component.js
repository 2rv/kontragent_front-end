import React from 'react';

import styled from 'styled-components';
import { spacing } from '../../../../lib/theme';

import { SectionLayout } from '../../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { PrimaryField } from '../../../../lib/elements/field';
import { SecondaryButton } from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { SuccessAlert } from '../../../../lib/elements/alert';
import { PrimaryLoader } from '../../../../lib/elements/loader';

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
      <SectionLayout>
        <SecondaryTitleText tid="SETTINGS.2FA.TITLE" />
        <form onSubmit={handleSubmit}>
          <SectionLayout>
            <Settings2FALayout>
              <PrimaryField
                titleTid="SETTINGS.2FA.FIELD.PHONE_NUMBER.TITLE"
                placeholderTid="SETTINGS.2FA.FIELD.PHONE_NUMBER.PLACEHOLDER"
                name={fieldPhoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[fieldPhoneNumber]}
                error={isFieldError(fieldPhoneNumber)}
              />

              <Button tid="SETTINGS.2FA.BUTTON" disabled={isSubmitDisabled()} />
            </Settings2FALayout>

            {(isError || errorMessage) && (
              <ErrorAlert tid={`ERROR.${errorMessage}`} />
            )}

            {isSuccess && <SuccessAlert tid={'SETTINGS.2FA.SUCCESS_MESSAGE'} />}
          </SectionLayout>
        </form>
      </SectionLayout>
    </React.Fragment>
  );
}

const Settings2FALayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: ${spacing(3)};
  grid-column-gap: ${spacing(3)};
`;

const Button = styled(SecondaryButton)`
  align-self: flex-end;
`;
