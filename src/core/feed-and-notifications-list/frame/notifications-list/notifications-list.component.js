import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { FindCompleteNotificationItemComponent } from './find-complete-notification-item.component';
import { NewMessageNotificationItemComponent } from './new-message-notification-item.component';
import { RatingNotificationItemComponent } from './rating-notification-item.component';
import { ProblemNotificationItemComponent } from './problem-notification-item.component';
import { PrimaryBox } from '../../../../lib/elements/box';

export function NotificationsListComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    feedAndNotificationsListData,
  } = props;
  return (
    <Container>
      {feedAndNotificationsListData.map((data, index) => (
        <div key={index}>
          <RatingNotificationItemComponent />
          <FindCompleteNotificationItemComponent />
          <NewMessageNotificationItemComponent />
          <ProblemNotificationItemComponent />
        </div>
      ))}
    </Container>
  );
}
const Container = styled(PrimaryBox)`
  display: flex;
  flex-direction: column;
  padding: ${spacing(4)} 0;
`;
