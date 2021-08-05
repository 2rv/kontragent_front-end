import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { Card } from '../../../cards';

export function ReferralDashboardComponent(props) {
  const { isPending, pageLoading, isError, isSuccess, errorMessage } = props;
  return (
    <CardCase>
      <Card type="referral-stats" />
      <Card type="referral-profit" />
    </CardCase>
  );
}
const CardCase = styled.div`
  display: flex;
  gap: ${spacing(8)};
`;
