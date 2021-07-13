import styled from 'styled-components';

import { TabsComponent } from './frame/tabs';
import { DangerNoticesComponent } from './frame/danger-notices';

import { TABS_LIST, DANGER_NOTICES_1, DANGER_NOTICES_2 } from './kontragent-information.constant';

import { PrimaryTitleText } from '../../lib/elements/text';
import { spacing, THEME_SIZE } from '../../lib/theme';

export function KontragentInformationComponent() {
  return (
    <Container>
      <KontragentTitle tid="KONTRAGENT_INFORMATION.TITLE" />
      <TabsComponent tabsList={TABS_LIST} />
      <DangerNoticesComponent dangerNotices1={DANGER_NOTICES_1} dangerNotices2={DANGER_NOTICES_2} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const KontragentTitle = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
  margin-bottom: ${spacing(3)};
`;
