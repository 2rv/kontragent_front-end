import styled from 'styled-components';
import { spacing } from '../../../../lib/theme';
import { SupportRequestListItem } from './support-requests-list.item';

export function SupportRequestsListComponent(props) {
  const { mySupportRequestsListData } = props;
  return (
    <Container>
      {mySupportRequestsListData.map((data, index) => (
        <SupportRequestListItem key={index} data={data} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
