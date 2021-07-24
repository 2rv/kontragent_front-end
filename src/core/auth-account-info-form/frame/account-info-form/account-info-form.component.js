import { FieldArray } from 'formik';

import { CompanyInfoFormComponent } from '../company-info-form';

import { SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../lib/elements/button';
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
    fieldCompanyInfoFormFields,
    fieldCompanyName,
    fieldCompanyInn,
    fieldPositionInCompany,
    initialCompanyInfoFormField,
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

            <FieldArray name={fieldCompanyInfoFormFields}>
              {({ remove, push }) => (
                <div>
                  {values[fieldCompanyInfoFormFields].map((_, index) => (
                    <CompanyInfoFormComponent
                      key={index}
                      index={index}
                      fieldCompanyInfoFormFields={fieldCompanyInfoFormFields}
                      fieldCompanyName={fieldCompanyName}
                      fieldCompanyInn={fieldCompanyInn}
                      fieldPositionInCompany={fieldPositionInCompany}
                      companyInfoFormCount={
                        values[fieldCompanyInfoFormFields].length
                      }
                      removeCompanyInfoForm={remove}
                    />
                  ))}
                  <PrimaryButton
                    tid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.BUTTON"
                    type="button"
                    onClick={() => push(initialCompanyInfoFormField)}
                  />
                </div>
              )}
            </FieldArray>
          </SectionLayout>

          <SecondaryButton
            tid="LOGIN.LOGIN_FORM.BUTTON"
            // disabled={isSubmitDisabled()}
          />
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
