import { SupportRequestListItem } from './support-request-list.item';
import styled from 'styled-components';
import { spacing } from '../../../../lib/theme';

export function SupportRequestListComponent(props) {
  const { supportRequestListData } = props;
  return (
    <Container>
      {supportRequestListData.map((supportRequest) => (
        <SupportRequestListItem
          problemTid={supportRequest.problemTid}
          requestCause={supportRequest.requestCause}
          requestStatusId={supportRequest.requestStatusId}
          date={supportRequest.date}
          status={supportRequest.status}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
