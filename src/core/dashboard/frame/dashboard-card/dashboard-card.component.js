import styled from 'styled-components';
import { TotalStatsCardItemComponent } from './total-stats-card-item.component';
import { MyStatsCardItemComponent } from './my-stats-card-item.component';
import { ReferalCardItemComponent } from './referal-card-item.component';
import { DialogsCardItemComponent } from './dialogs-card-item.component';
import { MyCounterpartiesCardItemComponent } from './my-counterparties-card-item.component';
export function DashboardCardComponent({ type, param }) {
  const Card = cardType(type);
  return <Card {...param} />;
}

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
    case 'counterparties':
      return MyCounterpartiesCardItemComponent;
  }
};
