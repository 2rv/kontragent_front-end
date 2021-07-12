import { MyRequestsJuristsListComponent } from './my-requests-jurists-list.component';
import { useEffect } from 'react';
import { myRequestsJuristsListLoadData } from './my-requests-jurists-list.action';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { MY_REQUESTS_JURISTS_LIST_STORE_NAME } from './my-requests-jurists-list.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function MyRequestsJuristsListContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[MY_REQUESTS_JURISTS_LIST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(myRequestsJuristsListLoadData());
  }, []);

  return (
    <MyRequestsJuristsListComponent
      isPending={isRequestPending(state.myRequestsJuristsList)}
      isError={isRequestError(state.myRequestsJuristsList)}
      isSuccess={isRequestSuccess(state.myRequestsJuristsList)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.myRequestsJuristsList)}
      myRequestsJuristsListData={myRequestsJuristsListData}
    />
  );
}

const myRequestsJuristsListData = [
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
