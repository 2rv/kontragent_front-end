import React from 'react';

import { CompanyInfoFormContainer } from '../company-info-form';

import styled from 'styled-components';
import { THEME_COLOR } from '../../../../lib/theme';

import { SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { PrimaryLoader } from '../../../../lib/elements/loader';
import { SuccessAlert } from '../../../../lib/elements/alert';
import { PrimaryDivider } from '../../../../lib/elements/divider';

export function AccountInfoFormComponent(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,

    fieldFullName,
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
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <form onSubmit={handleSubmit}>
        <SectionLayout>
          <SectionLayout type="MEDIUM">
            <PrimaryField
              titleTid="AUTH_ACCOUNT_INFO_FORM.ACCOUNT_INFO_FORM.FIELD.FULLNAME.TITLE"
              placeholderTid="AUTH_ACCOUNT_INFO_FORM.ACCOUNT_INFO_FORM.FIELD.FULLNAME.PLACEHOLDER"
              name={fieldFullName}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldFullName]}
              error={isFieldError(fieldFullName)}
            />

            <PrimaryDivider />

            <CompanyInfoFormContainer />
          </SectionLayout>

          <SectionLayout type="SMALL">
            <AddCompanyFormButton
              tid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.BUTTON"
              type="button"
            />
            <PrimaryButton
              tid="LOGIN.LOGIN_FORM.BUTTON"
              disabled={isSubmitDisabled()}
            />
          </SectionLayout>
          {(isError || errorMessage) && (
            <ErrorAlert tid={`ERROR.${errorMessage}`} />
          )}

          {isSuccess && (
            <SuccessAlert tid={'AUTH_ACCOUNT_INFO_FORM.SUCCESS_MESSAGE'} />
          )}
        </SectionLayout>
      </form>
    </>
  );
}

const AddCompanyFormButton = styled(PrimaryButton)`
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
  color: ${THEME_COLOR.TEXT.BASE};
`;
