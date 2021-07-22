import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { FindCompleteNotificationItemComponent } from './find-complete-notification-item.component';
import { NewMessageNotificationItemComponent } from './new-message-notification-item.component';
import { RatingNotificationItemComponent } from './rating-notification-item.component';
import { ProblemNotificationItemComponent } from './problem-notification-item.component';
import { PrimaryBox } from '../../../../lib/elements/box';
import React from 'react';

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
      <RatingNotificationItemComponent />
      <FindCompleteNotificationItemComponent />
      <NewMessageNotificationItemComponent />
      <ProblemNotificationItemComponent />
      {/* {feedAndNotificationsListData.map((data, index) => (
        <React.Fragment key={index}>

        </React.Fragment>
      ))} */}
    </Container>
  );
}
const Container = styled(PrimaryBox)`
  display: flex;
  flex-direction: column;
  padding: ${spacing(4)} 0;
  flex-grow: 1;
`;
