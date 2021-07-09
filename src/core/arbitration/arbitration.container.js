import { ArbitrationComponent } from './arbitration.component';

export function ArbitrationContainer() {
  return (
    <ArbitrationComponent selectOption={selectOption} listData={listData} />
  );
}
const selectOption = [
  { id: 0, tid: 'По дате' },
  { id: 1, tid: 'По имени' },
  { id: 2, tid: 'По статусу' },
];
const listData = [
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
