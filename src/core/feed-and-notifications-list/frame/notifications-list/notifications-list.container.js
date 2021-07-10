import { NotificationsListComponent } from './notifications-list.component';

export function NotificationsListContainer(props) {
  const { feedAndNotificationsListData } = props;
  return (
    <NotificationsListComponent
      feedAndNotificationsListData={feedAndNotificationsListData}
    />
  );
}
