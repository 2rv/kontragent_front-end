import { NotificationsListComponent } from './notifications-list.component';

export function NotificationsListContainer(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    feedAndNotificationsListData,
  } = props;
  return (
    <NotificationsListComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      feedAndNotificationsListData={feedAndNotificationsListData}
    />
  );
}
