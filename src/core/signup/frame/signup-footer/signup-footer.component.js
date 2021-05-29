import React from 'react';

import styled from 'styled-components';

import { SecondaryText } from '../../../../lib/elements/text';
import { PrimaryLink } from '../../../../lib/elements/link';

import { SIGNUP_PAGE_LOGIN_PATH } from '../../signup.constant';

import { spacing } from '../../../../lib/theme';

export function SignupFooterComponent() {
  return (
    <SignupFormFooterContainer>
      <div>
        <FormProposalMessage tid="SIGNUP.SIGNUP_FORM.SIGNIN_PROPOSAL" />
        <PrimaryLink
          tid="SIGNUP.SIGNUP_FORM.LINK_TO_SIGN_IN"
          pathname={SIGNUP_PAGE_LOGIN_PATH}
        />
      </div>
    </SignupFormFooterContainer>
  );
}

const SignupFormFooterContainer = styled.div`
  display: grid;
  gap: ${spacing(1)};
`;

const FormProposalMessage = styled(SecondaryText)`
  padding-right: ${spacing(1)};
`;
