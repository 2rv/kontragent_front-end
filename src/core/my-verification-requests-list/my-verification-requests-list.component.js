import styled from 'styled-components';
import { MyVerificationListContainer } from './frame';
import { spacing } from '../../lib/theme';

export function MyVerificationRequestsListComponent(props) {
  const { myVerificationListData } = props;
  return (
    <Container>
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
