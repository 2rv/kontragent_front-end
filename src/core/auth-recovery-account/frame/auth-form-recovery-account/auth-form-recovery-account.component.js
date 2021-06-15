import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../../../lib/theme';

import { SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { CommonError } from '../../../../lib/elements/error';
import { PrimaryTitleText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryLink } from '../../../../lib/elements/link';
import { PrimaryLoader } from '../../../../lib/elements/loader';

import { LOGIN_ROUTE_PATH } from '../../../../core/login';

export function AuthFormRecoveryAccountComponent(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,

    fieldEmail,
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
      <SectionLayout>
        <PrimaryTitleText tid="AUTH_RECOVERY_ACCOUNT.HEADER" />
        <form onSubmit={handleSubmit}>
          <SectionLayout>
            <PrimaryField
              titleTid="AUTH_RECOVERY_ACCOUNT.FORM_FIELD.EMAIL.TITLE"
              placeholderTid="AUTH_RECOVERY_ACCOUNT.FORM_FIELD.EMAIL.PLACEHOLDER"
              name={fieldEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldEmail]}
              error={isFieldError(fieldEmail)}
            />
            <PrimaryButton
              tid="AUTH_RECOVERY_ACCOUNT.BUTTON"
              disabled={isSubmitDisabled()}
            />

            {(isError || errorMessage) && (
              <CommonError tid={`ERROR.${errorMessage}`} />
            )}
          </SectionLayout>
        </form>
        <div>
          <FormProposalMessage tid="AUTH_RECOVERY_ACCOUNT.PROPOSAL" />
          <PrimaryLink
            tid="AUTH_RECOVERY_ACCOUNT.PROPOSAL_LINK"
            pathname={LOGIN_ROUTE_PATH}
          />
        </div>
      </SectionLayout>
    </React.Fragment>
  );
}

const FormProposalMessage = styled(SecondaryText)`
  padding-right: ${spacing(1)};
`;
