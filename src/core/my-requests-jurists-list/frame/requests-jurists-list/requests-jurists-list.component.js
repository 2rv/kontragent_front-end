import styled from 'styled-components';
import { RequestsJuristsListItemComponent } from './requests-jurists-list-item.component';
import { spacing } from '../../../../lib/theme';

export function RequestsJuristsListComponent(props) {
  const { myRequestsJuristsListData } = props;
  return (
    <Container>
      {myRequestsJuristsListData.map((data, index) => (
        <RequestsJuristsListItemComponent data={data} key={index} />
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
