import { MySupportRequestsListComponent } from './my-support-requests-list.component';
import { useEffect } from 'react';
import { mySupportRequestsListLoad } from './my-support-requests-list.action';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { MY_SUPPORT_REQUESTS_LIST_STORE_NAME } from './my-support-requests-list.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function MySupportRequestsListContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[MY_SUPPORT_REQUESTS_LIST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   useEffect(() => {
  //     dispatch(mySupportRequestsListLoad());
  //   }, []);

  return (
    <MySupportRequestsListComponent
      isPending={isRequestPending(state.mySupportRequestsList)}
      isError={isRequestError(state.mySupportRequestsList)}
      isSuccess={isRequestSuccess(state.mySupportRequestsList)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.mySupportRequestsList)}
      mySupportRequestsListData={mySupportRequestsListData}
    />
  );
}

const mySupportRequestsListData = [
  {
    problemTid: 'DATA.PROBLEM_CATEGORY.1',
    requestCause: 'Мой клиент нарушил правила сайта использовав...',
    requestStatusId: 0,
    statusTid: 'MY_SUPPORT_REQUEST_LIST.RESOLVED',
    date: 'вчера',
  },
  {
    problemTid: 'DATA.PROBLEM_CATEGORY.1',
    requestCause: 'Я сменил пароль и не могу войти с нового телефона',
    requestStatusId: 1,
    statusTid: 'MY_SUPPORT_REQUEST_LIST.UNDER_CONSIDERATION',
    date: 'сегодня',
  },
  {
    problemTid: 'DATA.PROBLEM_CATEGORY.1',
    requestCause: 'Я сменил пароль и не могу войти с нового телефона',
    requestStatusId: 2,
    statusTid: 'MY_SUPPORT_REQUEST_LIST.REJECTED',
    date: '28.06.2021',
  },
];
