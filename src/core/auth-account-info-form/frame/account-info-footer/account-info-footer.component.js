import React from 'react';

import styled from 'styled-components';

import { SecondaryText } from '../../../../lib/elements/text';
import { PrimaryLink } from '../../../../lib/elements/link';

import { AUTH_ACCOUNT_INFO_FORM_HELP_PATH } from '../../auth-account-info-form.constant';

import { spacing } from '../../../../lib/theme';

export function AccountInfoFooterComponent() {
  return (
    <div>
      <FormProposalMessage tid="AUTH_ACCOUNT_INFO_FORM.PROPOSAL" />
      <PrimaryLink
        tid="AUTH_ACCOUNT_INFO_FORM.PROPOSAL_ACTION"
        pathname={AUTH_ACCOUNT_INFO_FORM_HELP_PATH}
      />
    </div>
  );
}

const FormProposalMessage = styled(SecondaryText)`
  padding-right: ${spacing(1)};
`;
