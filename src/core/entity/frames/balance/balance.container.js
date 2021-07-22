import { BalanceComponent } from './balance.component';

export function BalanceContainer() {
  return <BalanceComponent balanceHistoryListData={balanceHistoryListData} />;
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
