import styled from 'styled-components';

import { HeaderComponent } from '../header';
import { DangerNoticesComponent } from './frame/danger-notices';
import { NoticeInfoComponent } from './frame/notice-info';

import { DANGER_NOTICES } from './information.constant';

import { PrimaryButton, SecondaryButton } from '../../../../lib/elements/button';
import { spacing } from '../../../../lib/theme';

export function InformationComponent() {
  return (
    <Container>
      <HeaderComponent
        title="COUNTERPARTY.DETAIL_INFORMATION.HEADER.TITLE"
        companyType="COUNTERPARTY.DETAIL_INFORMATION.HEADER.COMPANY_TYPE"
        companyName={'"Компания Гермес-Электро"'}
      >
        <Content>
          <PrimaryButton tid="COUNTERPARTY.DETAIL_INFORMATION.HEADER.DOWNLOAD_INFO_IN_PDF" />
          <SecondaryButton tid="COUNTERPARTY.DETAIL_INFORMATION.HEADER.LEGAL_ADVICE_FACE" />
        </Content>
      </HeaderComponent>
      <DangerNoticesComponent dangerNotices={DANGER_NOTICES} />
      <NoticeInfoComponent />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  gap: ${spacing(4)};
  margin-top: ${spacing(6)};
  button {
    width: 320px;
  }
`;
