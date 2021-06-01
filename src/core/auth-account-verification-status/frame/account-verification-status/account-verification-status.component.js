import React from 'react';

import styled from 'styled-components';

import { PrimaryTitleText } from '../../../../lib/elements/text';
import { PrimaryButton } from '../../../../lib/elements/button';
import { CommonError } from '../../../../lib/elements/error';
import { PrimaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';

import { THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';

import { spacing } from '../../../../lib/theme';

export function AccountVerificationStatusComponent() {
  return (
    <Container>
      <PrimaryBox>
        <Header tid="AUTH_ACCOUNT_VERIFICATION_STATUS.HEADER" />
        <MessageLayout>
          <PrimaryText tid="AUTH_ACCOUNT_VERIFICATION_STATUS.MESSAGE" />
          <VerificationErrorReason tid="AUTH_ACCOUNT_VERIFICATION_STATUS.HIGHLIGHTED_MESSAGE" />
        </MessageLayout>
        <Button tid="AUTH_ACCOUNT_VERIFICATION_STATUS.BUTTON" />
      </PrimaryBox>
      <ErrorShorhand tid="AUTH_ACCOUNT_VERIFICATION_STATUS.ERROR_SHORTHAND" />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: ${spacing(3)};
`;

const Header = styled(PrimaryTitleText)`
  margin-bottom: ${spacing(4)};
`;

const MessageLayout = styled.div`
  line-height: ${spacing(6)};
  padding-bottom: ${spacing(3)};
`;

const Button = styled(PrimaryButton)`
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
  color: ${THEME_COLOR.TEXT.BASE};
  width: 100%;
`;

const VerificationErrorReason = styled(PrimaryText)`
  color: ${THEME_COLOR.TEXT.ERROR};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;

const ErrorShorhand = styled(CommonError)`
  padding: ${spacing(4)};
`;
