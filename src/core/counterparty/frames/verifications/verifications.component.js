import styled from 'styled-components';

import { HeaderComponent } from './frame/header';
import { VerificationsListComponent } from './frame/verifications-list';

import { VERIFICATIONS_LIST } from './verifications.constant';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';

export function VerificationsComponent() {
  return (
    <Container>
      <IndentLayout>
        <SectionLayout>
          <HeaderComponent />
          <VerificationsListComponent verificationsList={VERIFICATIONS_LIST} />
        </SectionLayout>
      </IndentLayout>
    </Container>
  );
}

const Container = styled(PrimaryBox)`
  width: 100%;
  height: fit-content;
`;
