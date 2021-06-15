import { ArbitrageUserRequestListComponent } from './arbitrage-user-request-list.component';

export function ArbitrageUserRequestListContainer() {
  const listData = [
    {
      id: 2,
      status: 'Ожидает оплаты',
      topic: `Жалоба по теме нарушения налоговых правил компанией REFLEX`,
      recipient: 'Татьяна Лавелина',
      date: '40 минут назад',
      messageNumber: 25,
    },
    {
      id: 0,
      status: 'Ожидает оплаты',
      topic: `Жалоба по теме нарушения налоговых правил компанией REFLEX`,
      recipient: 'Татьяна Лавелина',
      date: '40 минут назад',
      messageNumber: 25,
    },
    {
      id: 1,
      status: 'Ожидает оплаты',
      topic: `Жалоба по теме нарушения налоговых правил компанией REFLEX`,
      recipient: 'Татьяна Лавелина',
      date: '40 минут назад',
      messageNumber: 25,
    },
  ];
  return <ArbitrageUserRequestListComponent listData={listData} />;
}
