import styled from 'styled-components';
import { HeaderComponent } from '../header';
import { DangerNoticesComponent } from './frame/danger-notices';
import { NoticeInfoComponent } from './frame/notice-info';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../lib/elements/button';
import { spacing } from '../../../../lib/theme';
import { SectionLayout } from '../../../../lib/elements/layout';

export function InformationComponent(props) {
  const { dangerNoticeList } = props;
  return (
    <Container>
      <SectionLayout type="LARGE">
        <HeaderComponent
          title="COUNTERPARTY.DETAIL_INFORMATION.HEADER.TITLE"
          companyType="COUNTERPARTY.DETAIL_INFORMATION.HEADER.COMPANY_TYPE"
          companyName={'"Компания Гермес-Электро"'}
        />
        <ActionCase>
          <PrimaryButton tid="COUNTERPARTY.DETAIL_INFORMATION.HEADER.DOWNLOAD_INFO_IN_PDF" />
          <SecondaryButton tid="COUNTERPARTY.DETAIL_INFORMATION.HEADER.LEGAL_ADVICE_FACE" />
        </ActionCase>
      </SectionLayout>
      <DangerNoticesComponent dangerNotices={dangerNoticeList} />
      <NoticeInfoComponent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  gap: ${spacing(8)};
`;

const ActionCase = styled.div`
  display: grid;
  gap: ${spacing(4)};
  height: 46px;
  grid-template-columns: minmax(auto, 318px) minmax(auto, 318px);
`;
