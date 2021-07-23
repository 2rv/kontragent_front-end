import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { FindCompleteNotificationItemComponent } from './find-complete-notification-item.component';
import { NewMessageNotificationItemComponent } from './new-message-notification-item.component';
import { RatingNotificationItemComponent } from './rating-notification-item.component';
import { ProblemNotificationItemComponent } from './problem-notification-item.component';
import { PrimaryBox } from '../../../../lib/elements/box';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryText } from '../../../../lib/elements/text';

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
    <List>
      {[1, 2, 3, 4, 1, 2, 3, 4].map((item, index) => {
        const Notification = typeNotifications(item);
        return (
          <DividerCase key={index}>
            <Container>
              <Notification />
            </Container>
            <PrimaryDivider />
          </DividerCase>
        );
      })}
    </List>
  );
}
const typeNotifications = (type) => {
  switch (type) {
    case 1:
      return RatingNotificationItemComponent;
    case 2:
      return FindCompleteNotificationItemComponent;
    case 3:
      return NewMessageNotificationItemComponent;
    case 4:
      return ProblemNotificationItemComponent;
    default:
      return () => <PrimaryText>Не определен тип уведомления</PrimaryText>;
  }
};
const List = styled(PrimaryBox)`
  display: flex;
  flex-direction: column;
  padding: ${spacing(4)} 0;
  height: fit-content;
  min-width: fit-content;
  min-height: 0;
  overflow: auto;
`;
const DividerCase = styled.div`
  display: grid;
  padding: 0 ${spacing(8)};
  transition: 0.2s ease-in;
  &:hover {
    background-color: ${THEME_COLOR.COLOR.SECONDARY};
  }
`;
const Container = styled.div`
  display: flex;
  padding: ${spacing(4)} 0;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing(3)};
  min-width: 0;
  width: fit-content;
`;
