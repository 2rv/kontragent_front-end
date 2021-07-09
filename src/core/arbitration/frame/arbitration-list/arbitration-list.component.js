import styled from 'styled-components';
import { ArbitrationListItemComponent } from './arbitration-list-item.component';
import { spacing } from '../../../../lib/theme';

export function ArbitrationListComponent(props) {
  return (
    <Container>
      {props.listData.map((data, index) => (
        <ArbitrationListItemComponent data={data} key={index} />
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
