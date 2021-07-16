import { FeedAndNotificationsHeaderComponent } from './feed-and-notifications-header.component';

export function FeedAndNotificationsHeaderContainer(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    feedAndNotificationsSelectOption,
  } = props;
  return (
    <FeedAndNotificationsHeaderComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      feedAndNotificationsSelectOption={feedAndNotificationsSelectOption}
    />
  );
}
