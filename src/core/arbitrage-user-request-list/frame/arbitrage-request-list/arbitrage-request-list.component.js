import styled from 'styled-components';
import { ArbitrageRequestListItemComponent } from './arbitrage-request-list-item.component';
import { spacing } from '../../../../lib/theme';

export function ArbitrageRequestListComponent(props) {
  return (
    <Container>
      {props.listData.map((data, index) => (
        <ArbitrageRequestListItemComponent data={data} key={index} />
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
