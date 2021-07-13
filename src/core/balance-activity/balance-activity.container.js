import { BalanceActivityComponent } from './balance-activity.component';
export function BalanceActivityContainer() {
  return (
    <BalanceActivityComponent balance={balance} activityItems={activityItems} />
  );
}
const balance = 2500;
const activityItems = [
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
    operation: 'Оплата контрагента',
    time: 'Час назад',
    sentMoney: 1250,
  },
];
