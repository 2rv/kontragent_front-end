import React from 'react';

import styled from 'styled-components';

import { PrimaryTitleText } from '../../../../lib/elements/text';

export function AuthPhoneVerificationInfoHeaderComponent() {
  return <SignupFormHeader tid="AUTH_PHONE_VERIFICATION_INFO.HEADER" />;
}

const SignupFormHeader = styled(PrimaryTitleText)``;
