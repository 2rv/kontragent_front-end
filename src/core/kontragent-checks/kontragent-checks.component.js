import styled from 'styled-components';

import { HeaderComponent } from './frame/header';
import { KontragentChecksListComponent } from './frame/kontragent-checks-list';

import { KONTRAGENT_CHECKS_LIST } from './kontragent-checks.constant';

import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import { spacing } from '../../lib/theme';

export function KontragentChecksComponent() {
  return (
    <Container>
      <IndentLayout>
        <SectionLayout>
          <HeaderComponent />
          <KontragentChecksListComponent kontragentChecksList={KONTRAGENT_CHECKS_LIST} />
        </SectionLayout>
      </IndentLayout>
    </Container>
  );
}

const Container = styled(PrimaryBox)`
  width: 100%;
  height: fit-content;
  margin: ${spacing(7)};
`;
