import React from 'react';

import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../lib/theme';

import { SectionLayout } from '../../../../lib/elements/layout';
import { FieldLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import { TextButton } from '../../../../lib/elements/button';

export function CompanyInfoFormComponent() {
  return (
    <SectionLayout type="MEDIUM">
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
        <DeleteItemAction tid="AUTH_ACCOUNT_INFO_FORM.COMPANY_INFO_FORM.FORM_ACTION" />
      </FieldLayout>
      <Line />
    </SectionLayout>
  );
}

const Line = styled.div`
  height: 2px;
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
  border-radius: 30px;
`;

const DeleteItemAction = styled(TextButton)`
  text-decoration-line: underline;
  text-align: start;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
