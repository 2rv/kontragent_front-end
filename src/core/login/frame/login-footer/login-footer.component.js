import React from 'react';

import styled from 'styled-components';

import { SecondaryText } from '../../../../lib/elements/text';
import { PrimaryLink } from '../../../../lib/elements/link';

import { LOGIN_PAGE_RESTORE_PATH } from '../../login.constant';

import { spacing } from '../../../../lib/theme';

export function LoginFooterComponent() {
  return (
    <LoginFooterContainer>
      <div>
        <FormProposalMessage tid="LOGIN.LOGIN_FORM.RESTORE_PROPOSAL" />
        <PrimaryLink
          tid="LOGIN.LOGIN_FORM.LINK_TO_RESTORE_PASSWORD"
          pathname={LOGIN_PAGE_RESTORE_PATH}
        />
      </div>
    </LoginFooterContainer>
  );
}

const LoginFooterContainer = styled.div`
  display: grid;
  gap: ${spacing(1)};
`;

const FormProposalMessage = styled(SecondaryText)`
  padding-right: ${spacing(1)};
`;
