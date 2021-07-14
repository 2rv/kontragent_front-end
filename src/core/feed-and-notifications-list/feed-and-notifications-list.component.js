import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { FeedAndNotificationsHeaderComponent, NotificationsListContainer } from './frame';

export function FeedAndNotificationsListComponent(props) {
  const { feedAndNotificationsListData } = props;
  return (
    <Container>
      <FeedAndNotificationsHeaderComponent />
      <NotificationsListContainer
        feedAndNotificationsListData={feedAndNotificationsListData}
      />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
  width: 100%;
`;
