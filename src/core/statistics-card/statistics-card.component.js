import styled from 'styled-components';
import { TotalStatsCardItemComponent } from './total-stats-card-item.component';
import { MyStatsCardItemComponent } from './my-stats-card-item.component';
import { ReferalCardItemComponent } from './referal-card-item.component';

export function StatisticsCardComponent({ type, param }) {
  const Card = cardType(type);
  return (
    <Container>
      <Card {...param} />
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  height: 141px;
`;

const cardType = (type) => {
  switch (type) {
    case 'total':
      return TotalStatsCardItemComponent;
    case 'my':
      return MyStatsCardItemComponent;
    case 'referal':
      return ReferalCardItemComponent;
  }
};
