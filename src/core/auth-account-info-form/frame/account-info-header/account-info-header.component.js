import React from 'react';

import styled from 'styled-components';

import { PrimaryTitleText } from '../../../../lib/elements/text';

export function AccountInfoHeaderComponent() {
  return <Header tid="AUTH_ACCOUNT_INFO_FORM.HEADER" />;
}

const Header = styled(PrimaryTitleText)``;
