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
    case 'counterparties':
      return MyCounterpartiesCardItemComponent;
    case 'referral-profit':
      return ReferalProfitCardItemComponent;
    case 'referral-stats':
      return ReferalStaticsCardItemComponent;

    default:
      return () => null;
  }
};

export function DashboardCardComponent(props) {
  const { type, param } = props; // так лучше пиши классная штука и удобнее
  const Card = cardType(type); // сделать можешь по другому тип да но впринципе и такая штука удобна
  return (
    <CardBox>
      <IndentLayout type="STANDART">
        <Card data={param} />
      </IndentLayout>
    </CardBox>
  );
}
const CardBox = styled(PrimaryBox)`
  box-shadow: 0px 15px 75px rgba(0, 0, 0, 0.1); // для hover сделай
  display: flex;
  flex: 1 0; // flex-grow: 1; flex-shrink: 0;
  width: 100%;
  min-height: fit-content; // высота по контенту сам знаешь
  min-width: fit-content; // если будет неправильная ширина можешь удалить или переделать
  position: relative; // это что бы ты картинку рекламы делал на всю карточку а сам контент в ней был правильно расположен
`;
