import { ArbitrationRequestsListComponent } from './arbitration-requests-list.component';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { arbitrationRequestsListLoadData } from './arbitration-requests-list.action';
import { ARBITRATION_REQUESTS_LIST_STORE_NAME } from './arbitration-requests-list.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function ArbitrationRequestsListContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ARBITRATION_REQUESTS_LIST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(arbitrationRequestsListLoadData);
  }, []);

  return (
    <ArbitrationRequestsListComponent
      isPending={isRequestPending(state.arbitrationList)}
      isError={isRequestError(state.arbitrationList)}
      isSuccess={isRequestSuccess(state.arbitrationList)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.arbitrationList)}
      arbitrationListData={arbitrationListData}
    />
  );
}

const arbitrationListData = [
  {
    statusId: 0,
    statusTid: 'ARBITRATION_REQUESTS_LIST.STATUS.RESOLVED',
    topic: `Жалоба по теме нарушения налоговых правил компанией REFLEX`,
    recipient: 'Татьяна Лавелина',
    date: '40 минут назад',
    messageNumber: 25,
    avatar: '/static/img/tempArbitrageRecipientAvatar.svg',
  },
  {
    statusId: 2,
    statusTid: 'ARBITRATION_REQUESTS_LIST.STATUS.REJECTED',
    topic: `Жалоба по теме нарушения налоговых правил компанией REFLEX`,
    recipient: 'Татьяна Лавелина',
    date: '40 минут назад',
    messageNumber: 25,
    avatar: '/static/img/tempArbitrageRecipientAvatar.svg',
  },
  {
    statusId: 1,
    statusTid: 'ARBITRATION_REQUESTS_LIST.STATUS.UNDER_CONSIDERATION',
    topic: `Жалоба по теме нарушения налоговых правил компанией REFLEX`,
    recipient: 'Татьяна Лавелина',
    date: '40 минут назад',
    messageNumber: 25,
    avatar: '/static/img/tempArbitrageRecipientAvatar.svg',
  },
];
