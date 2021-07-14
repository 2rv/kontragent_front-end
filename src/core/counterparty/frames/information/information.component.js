import styled from 'styled-components';

import { HeaderComponent } from './frame/header';
import { DangerNoticesComponent } from './frame/danger-notices';
import { NoticeInfoComponent } from './frame/notice-info';

import { DANGER_NOTICES } from './information.constant';

export function InformationComponent() {
  return (
    <Container>
      <HeaderComponent />
      <DangerNoticesComponent dangerNotices={DANGER_NOTICES} />
      <NoticeInfoComponent />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
