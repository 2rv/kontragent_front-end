import { NotificationsListComponent } from './notifications-list.component';

export function NotificationsListContainer(props) {
  const { notificationsData } = props;
  return <NotificationsListComponent notificationsData={notificationsData} />;
}
