import React from 'react';

import styled from 'styled-components';

import { SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout } from '../../../../lib/elements/layout';

import { PrimaryTitleText } from '../../../../lib/elements/text';
import { PrimaryText } from '../../../../lib/elements/text';
import { PrimaryButton } from '../../../../lib/elements/button';
import { CommonError } from '../../../../lib/elements/error';

import { THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';

import { spacing } from '../../../../lib/theme';

export function AccountVerificationStatusComponent() {
  return (
    <SectionLayout>
      <PrimaryBox>
        <IndentLayout>
          <Header tid="AUTH_ACCOUNT_VERIFICATION_STATUS.HEADER" />
          <MessageLayout>
            <PrimaryText tid="AUTH_ACCOUNT_VERIFICATION_STATUS.MESSAGE" />
            <VerificationErrorReason tid="AUTH_ACCOUNT_VERIFICATION_STATUS.HIGHLIGHTED_MESSAGE" />
          </MessageLayout>
          <Button tid="AUTH_ACCOUNT_VERIFICATION_STATUS.BUTTON" />
        </IndentLayout>
      </PrimaryBox>
      <ErrorShorhand
        compoundTid="AUTH_ACCOUNT_VERIFICATION_STATUS.ERROR_TYPE"
        tid="AUTH_ACCOUNT_VERIFICATION_STATUS.ERROR_SHORTHAND"
      />
    </SectionLayout>
  );
}

const Header = styled(PrimaryTitleText)`
  margin-bottom: ${spacing(4)};
`;

const MessageLayout = styled.div`
  line-height: 1.5;
  padding-bottom: ${spacing(3)};
`;

const Button = styled(PrimaryButton)`
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
  color: ${THEME_COLOR.TEXT.BASE};
  width: 100%;
`;

const VerificationErrorReason = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;

const ErrorShorhand = styled(CommonError)`
  display: flex;
  justify-content: center;
  padding: ${spacing(4)};
`;
