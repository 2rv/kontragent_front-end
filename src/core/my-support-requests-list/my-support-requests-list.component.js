import styled from 'styled-components';
import {
  MySupportRequestsListHeaderComponent,
  SupportRequestsListContainer,
} from './frame';
import { spacing } from '../../lib/theme';

export function MySupportRequestsListComponent(props) {
  const { mySupportRequestsListData } = props;
  return (
    <Container>
      <MySupportRequestsListHeaderComponent />
      <SupportRequestsListContainer
        mySupportRequestsListData={mySupportRequestsListData}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
  width: 100%;
`;
