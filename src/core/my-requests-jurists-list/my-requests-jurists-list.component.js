import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { RequestsJuristsListContainer } from './frame';

export function MyRequestsJuristsListComponent(props) {
  const { myRequestsJuristsListData } = props;
  return (
    <Container>
      <RequestsJuristsListContainer
        myRequestsJuristsListData={myRequestsJuristsListData}
      />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
`;
