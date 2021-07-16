import styled from 'styled-components';

import { HeaderComponent } from '../header';
import { DangerNoticesComponent } from './frame/danger-notices';

import { DANGER_NOTICES_1, DANGER_NOTICES_2 } from './red-zone-information.constant';
import { THEME_COLOR } from '../../../../lib/theme';

export function RedZoneInformationComponent() {
  return (
    <Container>
      <HeaderComponent
        title="COUNTERPARTY.RED_ZONE.HEADER.TITLE"
        companyType="COUNTERPARTY.RED_ZONE.HEADER.COMPANY_TYPE"
        companyName={'"Компания Гермес-Электро"'}
        titleColor={THEME_COLOR.TEXT.ERROR}
      />
      <DangerNoticesComponent dangerNotices1={DANGER_NOTICES_1} dangerNotices2={DANGER_NOTICES_2} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
