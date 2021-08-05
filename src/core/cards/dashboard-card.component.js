import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import { IndentLayout } from '../../lib/elements/layout';
import { PrimaryBox } from '../../lib/elements/box';
import {
  ApplicationCardItemComponent,
  ArbitrationCardItemComponent,
  DialogsCardItemComponent,
  AttendanceStatsCardItemComponent,
  MyStatsCardItemComponent,
  QuantitativeStatsCardItemComponent,
  ReferalCardItemComponent,
  ServiceStatsCardItemComponent,
  TotalStatsCardItemComponent,
  VerticalNewsCardComponent,
  MyCounterpartiesCardItemComponent,
  ReferalProfitCardItemComponent,
  ReferalStaticsCardItemComponent,
  FullScreenNewsCardComponent,
  HorizontalNewsCardComponent,
  AdvertCardComponent,
  AdvertBlockComponent,
  AdvertBarComponent,
} from './frame';

const cardType = (type) => {
  switch (type) {
    case 'total':
      return TotalStatsCardItemComponent;
    case 'my':
      return MyStatsCardItemComponent;
    case 'referal':
      return ReferalCardItemComponent;
    case 'dialogs':
      return DialogsCardItemComponent;
    case 'quantitative':
      return QuantitativeStatsCardItemComponent;
    case 'service':
      return ServiceStatsCardItemComponent;
    case 'attendance':
      return AttendanceStatsCardItemComponent;
    case 'application':
      return ApplicationCardItemComponent;
    case 'arbitration':
      return ArbitrationCardItemComponent;
    case 'vertical-news':
      return VerticalNewsCardComponent;
    case 'horizontal-news':
      return HorizontalNewsCardComponent;
    case 'full-news':
      return FullScreenNewsCardComponent;
    case 'counterparties':
      return MyCounterpartiesCardItemComponent;
    case 'referral-profit':
      return ReferalProfitCardItemComponent;
    case 'referral-stats':
      return ReferalStaticsCardItemComponent;
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
  flex: 1 0;
  height: fit-content;
  min-height: inherit;
`;
