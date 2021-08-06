import React from 'react';

import styled from 'styled-components';

import { SecondaryText } from '../../../../lib/elements/text';
import { PrimaryLink } from '../../../../lib/elements/link';
import { SectionLayout } from '../../../../lib/elements/layout';
import { AUTH_RECOVERY_ACCOUNT_ROUTE_PATH } from '../../../auth-recovery-account';
import { SIGNUP_ROUTE_PATH } from '../../../signup';
import { spacing } from '../../../../lib/theme';

export function LoginFooterComponent() {
  return (
    <SectionLayout type="MEDIUM">
      <Line>
        <SecondaryText tid="LOGIN.LOGIN_FORM.RESTORE_PROPOSAL" />
        <PrimaryLink
          tid="LOGIN.LOGIN_FORM.LINK_TO_RESTORE_PASSWORD"
          pathname={AUTH_RECOVERY_ACCOUNT_ROUTE_PATH}
        />
      </Line>
      <Line>
        <SecondaryText tid="Не зарегистрированы? " />
        <PrimaryLink tid="Регистрация" pathname={SIGNUP_ROUTE_PATH} />
      </Line>
    </SectionLayout>
  );
}
const Line = styled.div`
  display: inline-flex;
  gap: ${spacing(2)};
`;
