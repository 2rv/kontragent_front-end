import React from 'react';

import styled from 'styled-components';

import { PrimaryTitleText } from '../../../../lib/elements/text';

import { spacing } from '../../../../lib/theme';

export function LoginHeaderComponent() {
  return <LoginFormHeader tid="LOGIN.LOGIN_FORM.HEADER" />;
}

const LoginFormHeader = styled(PrimaryTitleText)`
  padding-bottom: ${spacing(4)};
`;
