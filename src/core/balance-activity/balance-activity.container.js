import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { BalanceActivityComponent } from './balance-activity.component';
import { BALANCE_ACTIVITY_STORE_NAME } from './balance-activity.constant';
import { balanceActivityLoad } from './balance-activity.action';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function BalanceActivityContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[BALANCE_ACTIVITY_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // useEffect(() => {
  //   dispatch(balanceActivityLoad());
  // }, []);

  return (
    <BalanceActivityComponent
      isPending={isRequestPending(state.balanceActivity)}
      isError={isRequestError(state.balanceActivity)}
      isSuccess={isRequestSuccess(state.balanceActivity)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.balanceActivity)}
      balance={balance}
      balanceActivityListData={balanceActivityListData}
    />
  );
}
const balance = 2500;
const balanceActivityListData = [
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
