import React from 'react';

import styled from 'styled-components';
import { spacing } from '../../lib/theme';

import { PrimaryBox } from '../../lib/elements/box';

import { PhoneVerificationInfoContainer } from './frame/phone-vefirication-info-form';
import { AuthPhoneVerificationInfoFooterComponent } from './frame/phone-vefirication-info-footer';
import { AuthPhoneVerificationInfoHeaderComponent } from './frame/phone-vefirication-info-header';

export function AuthPhoneVerificationInfoContainer() {
  return (
    <PrimaryBox>
      <AuthPhoneVerificationInfoComponentLayout>
        <AuthPhoneVerificationInfoHeaderComponent />
        <PhoneVerificationInfoContainer
          phoneNumber="+704123112323"
          initialValue={{ verificationCode: '' }}
        />
        <AuthPhoneVerificationInfoFooterComponent />
      </AuthPhoneVerificationInfoComponentLayout>
    </PrimaryBox>
  );
}

const AuthPhoneVerificationInfoComponentLayout = styled.div`
  display: grid;
  gap: ${spacing(4)};
`;
