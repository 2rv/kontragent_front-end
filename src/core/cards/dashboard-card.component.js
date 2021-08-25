import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import { IndentLayout } from '../../lib/elements/layout';
import { PrimaryBox } from '../../lib/elements/box';
import {
  DialogListCardItem,
  ArbitrationListCardItem,
  SupportRequestListCardItem,
  CounterpartiesListCardItem,
  ReferralSystemStats,
  ReferralAccountStats,
  ReferralProfitStats,
  VerticalNewsCardComponent,
  FullScreenNewsCardComponent,
  HorizontalNewsCardComponent,
  AdvertCardComponent,
  AdvertBlockComponent,
  AdvertBarComponent,
  VisitStatsCardItem,
  UserStatsCardItem,
  ServiceStatsCardItem,
  TotalStatsCardItem,
} from './frame';

const cardType = (type) => {
  switch (type) {
    case 'dialog-list':
      return DialogListCardItem;
    case 'arbitration-list':
      return ArbitrationListCardItem;
    case 'counterparties-list':
      return CounterpartiesListCardItem;
    case 'support-list':
      return SupportRequestListCardItem;

    case 'total-stats':
      return TotalStatsCardItem;
    case 'user-stats':
      return UserStatsCardItem;
    case 'service-stats':
      return ServiceStatsCardItem;
    case 'visit-stats':
      return VisitStatsCardItem;

    case 'referal-system-stats':
      return ReferralSystemStats;
    case 'referral-account-stats':
      return ReferralAccountStats;
    case 'referral-profit-stats':
      return ReferralProfitStats;

    case 'vertical-news':
      return VerticalNewsCardComponent;
    case 'horizontal-news':
      return HorizontalNewsCardComponent;
    case 'full-news':
      return FullScreenNewsCardComponent;

    case 'advert-card':
      return AdvertCardComponent;
    case 'advert-block':
      return AdvertBlockComponent;
    case 'advert-bar':
      return AdvertBarComponent;
    default:
      return () => null;
  }
};

export function DashboardCardComponent({ type, param }) {
  const Card = cardType(type);
  return (
    <Container>
      <Card {...param} />
    </Container>
  );
}
const Container = styled.div`
  box-shadow: 0px 15px 75px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.COLOR.BASE};
  padding: ${spacing(4)};
  flex: 1;
  height: fit-content;
  min-width: fit-content;
  min-height: inherit;
`;
