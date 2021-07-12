import styled from 'styled-components';
import { SupportRequestsListContainer } from './frame';
import { spacing } from '../../lib/theme';

export function MySupportRequestsListComponent(props) {
  const { mySupportRequestsListData, mySupportRequestsListSelectOption } =
    props;
  return (
    <Container>
      <SupportRequestsListContainer
        mySupportRequestsListData={mySupportRequestsListData}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
