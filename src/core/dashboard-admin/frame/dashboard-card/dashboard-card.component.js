import styled from 'styled-components';
import { QuantitativeStatsCardItemComponent } from './quantitative-stats-card-item.component';
import { ServiceStatsCardItemComponent } from './service-stats-card-item.component';
import { AttendanceStatsCardItemComponent } from './attendance-stats-card-item.component';
import { ApplicationCardItemComponent } from './application-card-item.component';
import { ArbitrationCardItemComponent } from './arbitration-card-item.component';

export function DashboardCardComponent({ type, param }) {
  const Card = cardType(type);
  return <Card {...param} />;
}

const cardType = (type) => {
  switch (type) {
    case 'quantitative':
      return QuantitativeStatsCardItemComponent;
    case 'service':
      return ServiceStatsCardItemComponent;
    case 'attendance':
      return AttendanceStatsCardItemComponent;
    case 'Application':
      return ApplicationCardItemComponent;
    case 'Arbitration':
      return ArbitrationCardItemComponent;
    default:
      return () => null;
  }
};
