import React from 'react';

import styled from 'styled-components';

import { FormProposalText } from '../../../../lib/elements/proposal';

import { LOGIN_REDIRECT } from '../../login.constant'

import { spacing } from '../../../../lib/theme';

export function LoginFooterComponent() {
  return (
    <LoginFormFooterContainer>
      <FormProposalText
        text_tid="LOGIN.LOGIN_FORM.RESTORE_PROPOSAL"
        link_tid="LOGIN.LOGIN_FORM.LINK_TO_RESTORE_PASSWORD"
        link_pathname={LOGIN_REDIRECT.RESTORE.PATH}
        link_config={LOGIN_REDIRECT.RESTORE.CONFIG}
      />
    </LoginFormFooterContainer>
  );
}

const LoginFormFooterContainer = styled.div`
  display: grid;
  gap: ${spacing(1)};
  padding-top: ${spacing(4)};
`;
