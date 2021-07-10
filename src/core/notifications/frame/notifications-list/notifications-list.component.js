import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { FindCompleteNotificationItemComponent } from './find-complete-notification-item.component';
import { NewMessageNotificationItemComponent } from './new-message-notification-item.component';
import { RatingNotificationItemComponent } from './rating-notification-item.component';
import { ProblemNotificationItemComponent } from './problem-notification-item.component';
export function NotificationsListComponent(props) {
  const { notificationsData } = props;
  return (
    <Container>
      {notificationsData.map((data, index) => (
        <>
          <RatingNotificationItemComponent />
          <FindCompleteNotificationItemComponent />
          <NewMessageNotificationItemComponent />
          <ProblemNotificationItemComponent />
        </>
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing(8)};
  background-color: ${THEME_COLOR.COLOR.BASE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
