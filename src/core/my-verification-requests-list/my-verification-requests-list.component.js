import styled from 'styled-components';
import { MyVerificationRequestsListHeaderFilterComponent, MyVerificationListContainer } from './frame';
import { spacing } from '../../lib/theme';

export function MyVerificationRequestsListComponent(props) {
  const { myVerificationListData } = props;
  return (
    <Container>
      <MyVerificationRequestsListHeaderFilterComponent />
      <MyVerificationListContainer
        myVerificationListData={myVerificationListData}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
`;
