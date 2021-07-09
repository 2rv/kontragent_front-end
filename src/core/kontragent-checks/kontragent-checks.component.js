import styled from 'styled-components';

import { HeaderComponent } from './frame/header';
import { KontragentChecksListComponent } from './frame/kontragent-checks-list';

import { KONTRAGENT_CHECKS_LIST } from './kontragent-checks.constant';

import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import { spacing } from '../../lib/theme';

export function KontragentChecksComponent() {
  return (
    <Box>
      <IndentLayout>
        <SectionLayout>
          <HeaderComponent />
          <KontragentChecksListComponent kontragentChecksList={KONTRAGENT_CHECKS_LIST} />
        </SectionLayout>
      </IndentLayout>
    </Box>
  );
}

const Box = styled(PrimaryBox)`
  margin: ${spacing(7)};
`;
