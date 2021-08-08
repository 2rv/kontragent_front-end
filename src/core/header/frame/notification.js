import styled from 'styled-components';
import { useState } from 'react';
import {
  THEME_COLOR,
  spacing,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../lib/theme';
import { ReactComponent as NotificationIcon } from '../../../asset/svg/notification.svg';
import { Popover } from '../../../lib/elements/modal';
import { PrimaryText } from '../../../lib/elements/text';
import { IconButton } from '../../../lib/elements/button';
import { NotificationsListContainer } from '../../feed-and-notifications-list/frame';

export function Notification(props) {
  const { notificationListData } = props;
  const [popover, setPopover] = useState(null);
  const openPopover = (e) => setPopover(e.currentTarget);
  const closePopover = () => setPopover(null);
  return (
    <>
      <Popover dense anchorEl={popover} onClose={closePopover}>
        <NotificationCase>
          <NotificationsListContainer
            feedAndNotificationsListData={notificationListData}
          />
        </NotificationCase>
      </Popover>
      <IconButton onClick={openPopover}>
        <NotificationIcon />
        {notificationListData && (
          <NotificationBadge>
            <BadgeText tid={notificationListData.length} />
          </NotificationBadge>
        )}
      </IconButton>
    </>
  );
}

const NotificationCase = styled.div`
  width: 400px;
`;
const BadgeText = styled(PrimaryText)`
  color: ${THEME_COLOR.TEXT.BASE};
`;
const NotificationBadge = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  position: absolute;
  top: -7px;
  right: -7px;
  background-color: ${THEME_COLOR.TEXT.ERROR};
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  align-items: center;
  justify-content: center;
`;
