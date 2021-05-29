import React from 'react';

import styled from 'styled-components';

import { PrimaryTitleText } from '../../../../lib/elements/text';

import { spacing } from '../../../../lib/theme';

export function SignupHeaderComponent() {
  return <SignupFormHeader tid="SIGNUP.SIGNUP_FORM.HEADER" />;
}

const SignupFormHeader = styled(PrimaryTitleText)``;
