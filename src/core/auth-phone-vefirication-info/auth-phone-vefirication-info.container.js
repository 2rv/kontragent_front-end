import React from 'react';

import { PhoneVerificationInfoContainer } from './frame/phone-vefirication-info-form';

export function AuthPhoneVerificationInfoContainer() {
  return (
    <PhoneVerificationInfoContainer
      phoneNumber="+704123112323"
      initialValue={{ verificationCode: '' }}
    />
  );
}
