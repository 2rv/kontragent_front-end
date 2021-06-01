import React from 'react';

import { SecondaryText } from '../../../../lib/elements/text';
import { TextButton } from '../../../../lib/elements/button';

export function AuthPhoneVerificationInfoFooterComponent() {
  return (
    <div>
      <SecondaryText tid="AUTH_PHONE_VERIFICATION_INFO.PROPOSAL" />
      <TextButton tid="AUTH_PHONE_VERIFICATION_INFO.PROPOSAL_ACTION" />
    </div>
  );
}
