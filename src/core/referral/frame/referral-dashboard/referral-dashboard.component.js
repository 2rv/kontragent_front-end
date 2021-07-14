import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryLink } from '../../../../lib/elements/link';
import { DashboardCard } from '../../../dashboard-card';
import { SectionLayout } from '../../../../lib/elements/layout';

export function ReferralDashboardComponent() {
  return (
    <SectionLayout type="LARGE">
      <Title tid="REFERRAL.REFERRAL_SYSTEM" />
      <Text>
        Задача организации, в особенности же начало повседневной работы по
        формированию позиции влечет за собой процесс внедрения и модернизации
        существенных финансовых и административных условий.&nbsp;
        <PrimaryLink tid="REFERRAL.MORE_REFERRAL_SYSTEM" />
      </Text>
      <CardCase>
        <DashboardCard type="referral-stats" />
        <DashboardCard type="referral-profit" />
      </CardCase>
    </SectionLayout>
  );
}
const Text = styled(SecondaryText)`
  line-height: 1.5;
`;
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const CardCase = styled.div`
  display: flex;
  gap: ${spacing(8)};
`;
