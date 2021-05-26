import React from 'react';

import styled from 'styled-components';

import { FormProposalText } from '../../../../lib/elements/proposal';

import { SIGNUP_REDIRECT } from '../../signup.constant'

import { spacing } from '../../../../lib/theme';

export function SignupFooterComponent() {
  return (
    <SignupFormFooterContainer>
      <FormProposalText
        text_tid="SIGNUP.SIGNUP_FORM.SIGNIN_PROPOSAL"
        link_tid="SIGNUP.SIGNUP_FORM.LINK_TO_SIGN_IN"
        link_pathname={SIGNUP_REDIRECT.LOGIN.PATH}
        link_config={SIGNUP_REDIRECT.LOGIN.CONFIG}
      />
    </SignupFormFooterContainer>
  );
}

const SignupFormFooterContainer = styled.div`
  display: grid;
  gap: ${spacing(1)};
  padding-top: ${spacing(4)};
`;
