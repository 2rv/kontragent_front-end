import React from 'react';

import { CompanyInfoFormContainer } from '../company-info-form';

import styled from 'styled-components';
import { THEME_COLOR } from '../../../../lib/theme';

import { SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { CommonError } from '../../../../lib/elements/error';
import { PrimaryLoader } from '../../../../lib/elements/loader';

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
    <React.Fragment>
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

            <Line />

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
            <CommonError tid={`ERROR.${errorMessage}`} />
          )}
        </SectionLayout>
      </form>
    </React.Fragment>
  );
}

const AddCompanyFormButton = styled(PrimaryButton)`
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
  color: ${THEME_COLOR.TEXT.BASE};
`;

const Line = styled.div`
  height: 2px;
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
  border-radius: 30px;
`;
