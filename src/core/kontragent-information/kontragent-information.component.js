import styled from 'styled-components';

import { TabsComponent } from './frame/tabs';
import { DangerNoticesComponent } from './frame/danger-notices';

import { TABS_LIST, DANGER_NOTICES_1, DANGER_NOTICES_2 } from './kontragent-information.constant';

import { PrimaryTitleText } from '../../lib/elements/text';
import { spacing, THEME_SIZE } from '../../lib/theme';

export function KontragentInformationComponent() {
  return (
    <div>
      <KontragentTitle tid="Контрагент" />
      <TabsComponent tabsList={TABS_LIST} />
      <DangerNoticesComponent dangerNotices1={DANGER_NOTICES_1} dangerNotices2={DANGER_NOTICES_2} />
    </div>
  );
}

const KontragentTitle = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
  margin-bottom: ${spacing(3)};
`;
