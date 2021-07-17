import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { MyLawyerRequestListComponent } from './my-lawyer-request-list.component';
import { myLawyerRequestListLoadData } from './my-lawyer-request-list.action';
import { MY_LAWYER_REQUEST_LIST_STORE_NAME } from './my-lawyer-request-list.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function MyLawyerRequestListContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[MY_LAWYER_REQUEST_LIST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   useEffect(() => {
  //     dispatch(myLawyerRequestListLoadData());
  //   }, []);

  return (
    <MyLawyerRequestListComponent
      isPending={isRequestPending(state.myLawyerRequestListData)}
      isError={isRequestError(state.myLawyerRequestListData)}
      isSuccess={isRequestSuccess(state.myLawyerRequestListData)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.myLawyerRequestListData)}
      myLawyerRequestListData={myLawyerRequestListData}
      myLawyerRequestListSelectOption={myLawyerRequestListSelectOption}
    />
  );
}
export const myLawyerRequestListSelectOption = [
  { id: 0, tid: '1' },
  { id: 1, tid: '2' },
  { id: 2, tid: '3' },
];
const myLawyerRequestListData = [
  {
    id: 2,
    status: 'Ожидает оплаты',
    topic: `Жалоба по теме нарушения налоговых правил компанией REFLEX`,
    recipient: 'Татьяна Лавелина',
    date: '40 минут назад',
    messageNumber: 25,
    avatar: '/static/img/tempArbitrageRecipientAvatar.svg',
  },
  {
    id: 0,
    status: 'Ожидает оплаты',
    topic: `Жалоба по теме нарушения налоговых правил компанией REFLEX`,
    recipient: 'Татьяна Лавелина',
    date: '40 минут назад',
    messageNumber: 25,
    avatar: '/static/img/tempArbitrageRecipientAvatar.svg',
  },
  {
    id: 1,
    status: 'Ожидает оплаты',
    topic: `Жалоба по теме нарушения налоговых правил компанией REFLEX`,
    recipient: 'Татьяна Лавелина',
    date: '40 минут назад',
    messageNumber: 25,
    avatar: '/static/img/tempArbitrageRecipientAvatar.svg',
  },
];
