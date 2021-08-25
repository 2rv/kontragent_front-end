import React from 'react';

import styled from 'styled-components';

import { SecondaryText } from '../../../../lib/elements/text';
import { PrimaryLink } from '../../../../lib/elements/link';
import { SectionLayout } from '../../../../lib/elements/layout';

import { SIGNUP_PAGE_LOGIN_PATH } from '../../signup.constant';

import { spacing } from '../../../../lib/theme';

export function SignupFooterComponent() {
  return (
    <SectionLayout type="MEDIUM">
      <Line>
        <SecondaryText tid="SIGNUP.SIGNUP_FORM.SIGNIN_PROPOSAL" />
        <PrimaryLink
          tid="SIGNUP.SIGNUP_FORM.LINK_TO_SIGN_IN"
          pathname={SIGNUP_PAGE_LOGIN_PATH}
        />
      </Line>
    </SectionLayout>
  );
}

const Line = styled.div`
  display: inline-flex;
  gap: ${spacing(2)};
`;
