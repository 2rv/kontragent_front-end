import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

import { spacing, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import { SecondaryButton } from '../../../../lib/elements/button';

export function CompanyInfoFormComponent(props) {
  const {
    index,
    fieldCompanyInfoFormFields,
    fieldCompanyName,
    fieldCompanyInn,
    fieldPositionInCompany,
    removeClickedCompanyInfoForm,
    companyInfoFormCount,
  } = props;

  return (
    <Layout type="MEDIUM">
      <Field name={`${fieldCompanyInfoFormFields}.${index}.${fieldCompanyName}`}>
        {({ field }) => (
          <PrimaryField
            titleTid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.FIELD.COMPANY_NAME.TITLE"
            placeholderTid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.FIELD.COMPANY_NAME.PLACEHOLDER"
            {...field}
          />
        )}
      </Field>
      <Field name={`${fieldCompanyInfoFormFields}.${index}.${fieldCompanyInn}`}>
        {({ field }) => (
          <PrimaryField
            titleTid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.FIELD.INN.TITLE"
            placeholderTid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.FIELD.INN.PLACEHOLDER"
            {...field}
          />
        )}
      </Field>
      <Field name={`${fieldCompanyInfoFormFields}.${index}.${fieldPositionInCompany}`}>
        {({ field }) => (
          <PrimaryField
            titleTid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.FIELD.POSITION.TITLE"
            placeholderTid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.FIELD.POSITION.PLACEHOLDER"
            {...field}
          />
        )}
      </Field>
      {companyInfoFormCount !== 1 && (
        <DeleteButton
          tid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.FORM_ACTION"
          type="button"
          onClick={() => removeClickedCompanyInfoForm(index)}
        />
      )}
      <PrimaryDivider />
    </Layout>
  );
}

const Layout = styled(SectionLayout)`
  margin-bottom: ${spacing(3)};
`;

const DeleteButton = styled(SecondaryButton)`
  text-decoration-line: underline;
  text-align: start;
  padding: 0;
  background-color: transparent;
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
