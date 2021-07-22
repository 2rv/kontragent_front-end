import styled from 'styled-components';

import { HeaderComponent } from '../header';
import { DangerNoticesComponent } from './frame/danger-notices';
import { StatisticsComponent } from './frame/statistics';
import { NoticeInfoComponent } from './frame/notice-info';

import { DANGER_NOTICES } from './information.constant';

import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { spacing, THEME_COLOR } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/elements/layout';

export function InformationComponent() {
  return (
    <Container>
      <DarkRedAlert tid="ENTITY.DETAIL_INFORMATION.ERROR_ALERT" />
      <SectionLayout type="LARGE">
        <HeaderComponent
          title="ENTITY.DETAIL_INFORMATION.HEADER.TITLE"
          companyType="ENTITY.DETAIL_INFORMATION.HEADER.COMPANY_TYPE"
          companyName={'"Компания Гермес-Электро"'}
        />
        <Content>
          <PrimaryButton tid="ENTITY.DETAIL_INFORMATION.HEADER.DOWNLOAD_INFO_IN_PDF" />
          <SecondaryButton tid="ENTITY.DETAIL_INFORMATION.HEADER.LEGAL_ADVICE_FACE" />
        </Content>
      </SectionLayout>
      <DangerNoticesComponent dangerNotices={DANGER_NOTICES} />
      <StatisticsComponent />
      <NoticeInfoComponent />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: ${spacing(8)};
`;

const DarkRedAlert = styled(ErrorAlert)`
  background-color: ${THEME_COLOR.COLOR.VALIDATION};
  span {
    color: white;
  }
  svg {
    fill: ${THEME_COLOR.COLOR.BASE};
  }
`;

const Content = styled.div`
  display: flex;
  gap: ${spacing(4)};
  button {
    width: 320px;
  }
`;
