import React from 'react';

import styled from 'styled-components';

import { PrimaryTitleText } from '../../../../lib/elements/text';
import { PrimaryButton } from '../../../../lib/elements/button';
import { PrimaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';

import { THEME_COLOR } from '../../../../lib/theme';

import { spacing } from '../../../../lib/theme';

export function EmailVerificationStatusComponent() {
  return (
    <PrimaryBox>
      <Header tid="AUTH_EMAIL_VERIFICATION_STATUS.HEADER" />
      <MessageLayout>
        <PrimaryText tid="AUTH_EMAIL_VERIFICATION_STATUS.MESSAGE" />
      </MessageLayout>
      <Button tid="AUTH_EMAIL_VERIFICATION_STATUS.BUTTON" />
    </PrimaryBox>
  );
}

const Header = styled(PrimaryTitleText)`
  margin-bottom: ${spacing(4)};
`;

const MessageLayout = styled.div`
  line-height: ${spacing(6)};
  margin-bottom: ${spacing(3)};
`;

const Button = styled(PrimaryButton)`
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
  color: ${THEME_COLOR.TEXT.BASE};
  width: 100%;
`;
