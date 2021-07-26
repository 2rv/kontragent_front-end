import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../../../main/store/store.service';
// import { verificationListData } from './verifications.action';
import { COUNTERPARTY_VERIFICATIONS_STORE_NAME } from './verifications.constant';
import { VerificationsComponent } from './verifications.component';

export function VerificationsContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[COUNTERPARTY_VERIFICATIONS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   React.useEffect(() => {
  //     dispatch(verificationListData());
  //   }, []);

  return (
    <VerificationsComponent
      isPending={isRequestPending(state.verifications)}
      isError={isRequestError(state.verifications)}
      isSuccess={isRequestSuccess(state.verifications)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.verifications)}
      verificationListData={verificationListData}
    />
  );
}

export const verificationListData = [
  {
    id: 1,
    companyName: 'ООО "ТЕХЭЛЕКТРО МСК"',
    price: '20 000 руб.',
    time: '25.08.2021',
    paid: true,
    status: {
      title: 'COUNTERPARTY.VERIFICATIONS.STATUS.STANDART',
      id: 0,
    },
    info: {
      title: 'COUNTERPARTY.VERIFICATIONS.TYPE.DONE',
      id: 0,
    },
  },
  {
    id: 1,
    companyName: 'ООО "ТЕХЭЛЕКТРО МСК"',
    price: '20 000 руб.',
    time: '25.08.2021',
    paid: true,
    status: {
      title: 'COUNTERPARTY.VERIFICATIONS.STATUS.STANDART',
      id: 0,
    },
    info: {
      title: 'COUNTERPARTY.VERIFICATIONS.TYPE.DONE',
      id: 0,
    },
  },
  {
    id: 1,
    companyName: 'ООО "ТЕХЭЛЕКТРО МСК"',
    price: '20 000 руб.',
    time: '25.08.2021',
    paid: true,
    status: {
      title: 'COUNTERPARTY.VERIFICATIONS.STATUS.STANDART',
      id: 0,
    },
    info: {
      title: 'COUNTERPARTY.VERIFICATIONS.TYPE.DONE',
      id: 0,
    },
  },
  {
    id: 1,
    companyName: 'ООО "ТЕХЭЛЕКТРО МСК"',
    price: '20 000 руб.',
    time: '25.08.2021',
    paid: true,
    status: {
      title: 'COUNTERPARTY.VERIFICATIONS.STATUS.STANDART',
      id: 0,
    },
    info: {
      title: 'COUNTERPARTY.VERIFICATIONS.TYPE.DONE',
      id: 0,
    },
  },
  {
    id: 1,
    companyName: 'ООО "ТЕХЭЛЕКТРО МСК"',
    price: '20 000 руб.',
    time: '25.08.2021',
    paid: true,
    status: {
      title: 'COUNTERPARTY.VERIFICATIONS.STATUS.STANDART',
      id: 0,
    },
    info: {
      title: 'COUNTERPARTY.VERIFICATIONS.TYPE.DONE',
      id: 0,
    },
  },
  {
    id: 1,
    companyName: 'ООО "ТЕХЭЛЕКТРО МСК"',
    price: '20 000 руб.',
    time: '25.08.2021',
    paid: true,
    status: {
      title: 'COUNTERPARTY.VERIFICATIONS.STATUS.STANDART',
      id: 0,
    },
    info: {
      title: 'COUNTERPARTY.VERIFICATIONS.TYPE.DONE',
      id: 0,
    },
  },
  {
    id: 1,
    companyName: 'ООО "ТЕХЭЛЕКТРО МСК"',
    price: '20 000 руб.',
    time: '25.08.2021',
    paid: true,
    status: {
      title: 'COUNTERPARTY.VERIFICATIONS.STATUS.STANDART',
      id: 0,
    },
    info: {
      title: 'COUNTERPARTY.VERIFICATIONS.TYPE.DONE',
      id: 0,
    },
  },
  {
    id: 2,
    companyName: 'ООО "КАПСТРОЙЭНЕРОГОТЕХ"',
    price: '60 000 руб.',
    time: '06.08.2020',
    paid: false,
    status: {
      title: 'COUNTERPARTY.VERIFICATIONS.STATUS.STANDART',
      id: 0,
    },
    info: {
      title: 'COUNTERPARTY.VERIFICATIONS.TYPE.AWAITING_PAYMENT',
      id: 1,
    },
  },
  {
    id: 3,
    companyName: 'ООО "ФАЕР ГРУПП ЦЕНТР"',
    price: '50 000 руб.',
    time: '06.08.2020',
    paid: false,
    status: {
      title: 'COUNTERPARTY.VERIFICATIONS.STATUS.EXTENDED',
      id: 1,
    },
    info: {
      title: 'COUNTERPARTY.VERIFICATIONS.TYPE.PERFORMED',
      id: 2,
    },
  },
];
