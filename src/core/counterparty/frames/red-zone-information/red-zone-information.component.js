import styled from 'styled-components';

import { DangerNoticesComponent } from './frame/danger-notices';

import { DANGER_NOTICES_1, DANGER_NOTICES_2 } from './red-zone-information.constant';

export function RedZoneInformationComponent() {
  return (
    <Container>
      <DangerNoticesComponent dangerNotices1={DANGER_NOTICES_1} dangerNotices2={DANGER_NOTICES_2} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
