import React from 'react';

import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { SectionLayout } from '../../../../lib/elements/layout';
import { FieldLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import {
  PrimaryButton,
  SecondaryButton,
  TextButton,
} from '../../../../lib/elements/button';

export function CompanyInfoFormComponent(props) {
  const { countForm, deleteCurrentForm } = props;
  return countForm.map((item, index) => {
    return (
      item && (
        <SectionLayout type="MEDIUM" key={index}>
          <FieldLayout>
            <PrimaryField
              titleTid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.FIELD.COMPANY_NAME.TITLE"
              placeholderTid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.FIELD.COMPANY_NAME.PLACEHOLDER"
              name="PLACEHOLDER1"
            />
            <PrimaryField
              titleTid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.FIELD.INN.TITLE"
              placeholderTid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.FIELD.INN.PLACEHOLDER"
              name="PLACEHOLDER2"
            />
            <PrimaryField
              titleTid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.FIELD.POSITION.TITLE"
              placeholderTid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.FIELD.POSITION.PLACEHOLDER"
              name="PLACEHOLDER2"
            />
            <DeleteButton
              tid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.FORM_ACTION"
              type="button"
              onClick={() => deleteCurrentForm(index)}
            />
          </FieldLayout>
          <PrimaryDivider />
        </SectionLayout>
      )
    );
  });
}

const DeleteButton = styled(SecondaryButton)`
  text-decoration-line: underline;
  text-align: start;
  padding: 0;
  background-color: transparent;
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
