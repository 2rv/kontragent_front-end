import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { PrimaryBox } from '../../../../lib/elements/box';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryText } from '../../../../lib/elements/text';

import { CompanyInviteNotification } from './company-invite-notification';
import { FindCompleteNotification } from './find-complete-notification';
import { MessageNotification } from './message-notification';
import { RatingNotification } from './rating-notification';
import { AttentionNotification } from './attention-notification';
import { SessionNotification } from './session-notification';

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
      {feedAndNotificationsListData.map((item, index) => {
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
      return RatingNotification;
    case 2:
      return FindCompleteNotification;
    case 3:
      return MessageNotification;
    case 4:
      return AttentionNotification;
    case 5:
      return CompanyInviteNotification;
    case 6:
      return SessionNotification;
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
`;
