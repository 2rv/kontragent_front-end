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

export function ReferralDashboardComponent(props) {
  const { isPending, pageLoading, isError, isSuccess, errorMessage } = props;
  return (
    <CardCase>
      <DashboardCard type="referral-stats" />
      <DashboardCard type="referral-profit" />
    </CardCase>
  );
}
const CardCase = styled.div`
  display: flex;
  gap: ${spacing(8)};
`;
