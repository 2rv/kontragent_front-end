import { MyVerificationRequestsListComponent } from './my-verification-requests-list.component';
import { myVerificationRequestsListLoad } from './my-verification-requests-list.action';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { MY_VERIFICATION_REQUESTS_LIST_STORE_NAME } from './my-verification-requests-list.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function MyVerificationRequestsListContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[MY_VERIFICATION_REQUESTS_LIST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(myVerificationRequestsListLoad());
  }, []);

  return (
    <MyVerificationRequestsListComponent
      isPending={isRequestPending(state.myVerificationList)}
      isError={isRequestError(state.myVerificationList)}
      isSuccess={isRequestSuccess(state.myVerificationList)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.myVerificationList)}
      myVerificationListData={myVerificationListData}
    />
  );
}

const myVerificationListData = [
  {
    company: 'ООО "КАПСТРОЙЭНЕРОГОТЕХ"',
    inspectionTypeId: 0,
    inspectionTypeTid: 'MY_VERIFICATION_REQUESTS_LIST.TYPE.EXTENDED',
    sum: '60 000 руб.',
    date: '06.08.2020',
    inspectionStatusId: 0,
    inspectionStatusTid: 'MY_VERIFICATION_REQUESTS_LIST.STATUS.COMPLETED',
    payed: true,
  },
  {
    company: 'ООО "ТЕХЭЛЕКТРО МСК"',
    inspectionTypeId: 1,
    inspectionTypeTid: 'MY_VERIFICATION_REQUESTS_LIST.TYPE.STANDART',
    sum: '20 000 руб.',
    date: '25.08.2021',
    inspectionStatusId: 1,
    inspectionStatusTid:
      'MY_VERIFICATION_REQUESTS_LIST.STATUS.AWAITING_PAYMENT',
    payed: false,
  },
  {
    company: 'ООО "ТЕХЭЛЕКТРО МСК"',
    inspectionTypeId: 1,
    inspectionTypeTid: 'MY_VERIFICATION_REQUESTS_LIST.TYPE.STANDART',
    sum: '20 000 руб.',
    date: '25.08.2021',
    inspectionStatusId: 1,
    inspectionStatusTid: 'MY_VERIFICATION_REQUESTS_LIST.STATUS.IN_PROGRESS',
    payed: false,
  },
];
