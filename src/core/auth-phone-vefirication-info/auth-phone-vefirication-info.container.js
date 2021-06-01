import React from 'react';

import { AuthPhoneVerificationInfoComponent } from './auth-phone-vefirication-info.component';

export function AuthPhoneVerificationInfoContainer() {
  return (
    <AuthPhoneVerificationInfoComponent
      phoneNumber="+704123112323"
      initialValue={{ verificationCode: '' }}
    />
  );
}
