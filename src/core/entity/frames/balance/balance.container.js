import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../../../main/store/store.service';
// import { balanceLoad } from './balance.action';
import { ENTITY_BALANCE_STORE_NAME } from './balance.constant';
import { BalanceComponent } from './balance.component';

export function BalanceContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ENTITY_BALANCE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   React.useEffect(() => {
  //     dispatch(balanceLoad());
  //   }, []);

  return (
    <BalanceComponent
      isPending={isRequestPending(state.balance)}
      isError={isRequestError(state.balance)}
      isSuccess={isRequestSuccess(state.balance)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.balance)}
      balanceHistoryListData={balanceHistoryListData}
    />
  );
}

const balanceHistoryListData = [
  {
    operation: 'Оплата проверки контрагента',
    time: '25 минут назад',
    sentMoney: 500,
    check: true,
  },
  {
    operation: 'Оплата контрагента',
    time: 'Час назад',
    sentMoney: 1250,
  },
  {
    operation: 'Оплата проверки контрагента',
    time: '25 минут назад',
    sentMoney: 500,
    check: true,
  },
  {
    operation: 'Оплата проверки контрагента',
    time: '25 минут назад',
    sentMoney: 500,
    check: true,
  },
  {
    operation: 'Оплата контрагента',
    time: 'Час назад',
    sentMoney: 1250,
  },
  {
    operation: 'Оплата проверки контрагента',
    time: '25 минут назад',
    sentMoney: 500,
    check: true,
  },
  {
    operation: 'Оплата проверки контрагента',
    time: '25 минут назад',
    sentMoney: 500,
    check: true,
  },
  {
    operation: 'Оплата контрагента',
    time: 'Час назад',
    sentMoney: 1250,
  },
  {
    operation: 'Оплата проверки контрагента',
    time: '25 минут назад',
    sentMoney: 500,
    check: true,
  },
];
