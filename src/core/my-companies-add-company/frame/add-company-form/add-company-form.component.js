import React from 'react';

import { SectionLayout } from '../../../../lib/elements/layout';
import { FieldLayout, ButtonLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import { SecondaryButton } from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { SuccessAlert } from '../../../../lib/elements/alert';

export function AddCompanyFormComponent(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,

    fieldName,
    fieldInn,
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
    <form onSubmit={handleSubmit}>
      <SectionLayout>
        <FieldLayout>
          <PrimaryField
            titleTid="MY_COMPANIES.MY_COMPANIES_ADD_COMPANY.ADD_COMPANY_FORM.FIELD.NAME.TITLE"
            placeholderTid="MY_COMPANIES.MY_COMPANIES_ADD_COMPANY.ADD_COMPANY_FORM.FIELD.NAME.PLACEHOLDER"
            name={fieldName}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldName]}
            error={isFieldError(fieldName)}
          />

          <PrimaryField
            titleTid="MY_COMPANIES.MY_COMPANIES_ADD_COMPANY.ADD_COMPANY_FORM.FIELD.INN.TITLE"
            placeholderTid="MY_COMPANIES.MY_COMPANIES_ADD_COMPANY.ADD_COMPANY_FORM.FIELD.INN.PLACEHOLDER"
            name={fieldInn}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldInn]}
            error={isFieldError(fieldInn)}
          />
        </FieldLayout>
        <ButtonLayout type="double">
          <SecondaryButton
            tid="MY_COMPANIES.MY_COMPANIES_ADD_COMPANY.ADD_COMPANY_FORM.BUTTON"
            disabled={isSubmitDisabled()}
          />
        </ButtonLayout>

        {(isError || errorMessage) && (
          <ErrorAlert tid={`ERROR.${errorMessage}`} />
        )}

        {isSuccess && (
          <SuccessAlert
            tid={
              'MY_COMPANIES.MY_COMPANIES_ADD_COMPANY.ADD_COMPANY_FORM.SUCCESS_MESSAGE'
            }
          />
        )}
      </SectionLayout>
    </form>
  );
}
