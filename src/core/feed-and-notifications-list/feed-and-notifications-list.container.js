import { FeedAndNotificationsListComponent } from './feed-and-notifications-list.component';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { FEED_AND_NOTIFICATIONS_LIST_STORE_NAME } from './feed-and-notifications-list.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { feedAndNotificationsListLoadData } from './feed-and-notifications-list.constant';

export function FeedAndNotificationsListContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[FEED_AND_NOTIFICATIONS_LIST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   useEffect(() => {
  //     dispatch(feedAndNotificationsListLoadData());
  //   }, []);

  return (
    <FeedAndNotificationsListComponent
      isPending={isRequestPending(state.feedAndNotificationsListData)}
      isError={isRequestError(state.feedAndNotificationsListData)}
      isSuccess={isRequestSuccess(state.feedAndNotificationsListData)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.feedAndNotificationsListData)}
      feedAndNotificationsSelectOption={feedAndNotificationsSelectOption}
      feedAndNotificationsListData={[1, 2, 3, 4, 5, 6, 7]}
    />
  );
}
const feedAndNotificationsSelectOption = [
  { id: 0, tid: 'По дате' },
  { id: 1, tid: 'По имени' },
  { id: 2, tid: 'По статусу' },
];
const feedAndNotificationsListData = [
  {
    id: 2,
    status: 'Ожидает оплаты',
    topic: `Жалоба по теме нарушения налоговых правил компанией REFLEX`,
    recipient: 'Татьяна Лавелина',
    date: '40 минут назад',
    messageNumber: 25,
  },
  {
    id: 0,
    status: 'Ожидает оплаты',
    topic: `Жалоба по теме нарушения налоговых правил компанией REFLEX`,
    recipient: 'Татьяна Лавелина',
    date: '40 минут назад',
    messageNumber: 25,
  },
  {
    id: 1,
    status: 'Ожидает оплаты',
    topic: `Жалоба по теме нарушения налоговых правил компанией REFLEX`,
    recipient: 'Татьяна Лавелина',
    date: '40 минут назад',
    messageNumber: 25,
  },
];
