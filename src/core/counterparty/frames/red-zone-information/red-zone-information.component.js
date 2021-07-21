import styled from 'styled-components';

import { HeaderComponent } from '../header';
import { WaysResolveFormContainer, DangerNoticeComponent } from './frame';
import { spacing, THEME_COLOR } from '../../../../lib/theme';

export function RedZoneInformationComponent(props) {
  const { dangerNoticeData, waysResolveData } = props;
  return (
    <Container>
      <HeaderComponent
        title="COUNTERPARTY.RED_ZONE.HEADER.TITLE"
        companyType="ООО"
        companyName={'"Компания Гермес-Электро"'}
        titleColor={THEME_COLOR.TEXT.ERROR}
      />
      <DangerNoticeComponent dangerNoticeData={dangerNoticeData} />
      <WaysResolveFormContainer waysResolveData={waysResolveData} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(8)};
`;
